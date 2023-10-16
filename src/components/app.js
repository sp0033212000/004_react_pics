import React, { useCallback, useRef, useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import useOnEndReached from "../hooks/useOnEndReached";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const page = useRef(1);
  const totalPage = useRef(1);
  const cacheTerm = useRef("");

  /**
   * @description Fetches receive term as query and page(optional) as page number, return an array of image urls
   * @param {string} term
   * @param {number} page
   * @returns {Promise<{
   *     total: number;
   *     total_pages: number;
   *     results: {
   *         id: string;
   *         urls: {
   *             raw: string;
   *             full: string;
   *             regular: string;
   *             small: string;
   *             thumb: string;
   *         }
   *     }[]
   * }>}
   */
  const fetcher = useCallback(async (term, page = 1) => {
    try {
      setLoading(true);
      const res = await unsplash.get("/search/photos", {
        params: {
          query: term,
          per_page: 10,
          page,
        },
      });

      return res.data;
    } finally {
      setLoading(false);
    }
  }, []);

  const onSearch = useCallback(
    async (term) => {
      const res = await fetcher(term);

      page.current = 1;
      totalPage.current = res.total_pages;
      cacheTerm.current = term;
      setImages((prev) => prev.concat(res.results));
    },
    [fetcher],
  );

  useOnEndReached({
    onEndReached: async () => {
      try {
        page.current += 1;
        const res = await fetcher(cacheTerm.current, page.current);
        setImages((prev) => prev.concat(res.results));
      } catch (e) {
        page.current -= 1;
      }
    },
    disabled:
      images.length <= 0 || isLoading || page.current >= totalPage.current,
    wait: 3000,
  });

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearch} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
