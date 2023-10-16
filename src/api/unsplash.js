import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    // Authorization: 'Client-ID e3a560040278efa93220060acd19ca3faa693e19192a2b5bd2c6083c7d95c078'
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
  },
});
