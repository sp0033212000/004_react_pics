import { useCallback, useEffect, useRef } from "react";

import { throttle } from "lodash";

const useOnEndReached = ({ onEndReached, disabled, wait = 16 }) => {
  const reached = useRef(onEndReached);
  const throttledOnEndReached = useRef(
    throttle((event) => reached.current(event), wait),
  );

  useEffect(() => {
    const cancel = throttledOnEndReached.current.cancel;
    return () => {
      cancel();
    };
  }, []);

  useEffect(() => {
    reached.current = onEndReached;
  }, [onEndReached]);

  const _onEndReached = useCallback((event) => {
    const { innerHeight } = window;
    const scrollTop = document.querySelector("html")?.scrollTop ?? 0;
    const scrollHeight = document.querySelector("html")?.scrollHeight ?? 0;

    const isReached = innerHeight + scrollTop === scrollHeight;
    if (isReached) {
      requestAnimationFrame(() => throttledOnEndReached.current(event));
    }
  }, []);

  useEffect(() => {
    if (disabled) return;
    const html = document.querySelector("html");
    const touchable = window.navigator.maxTouchPoints > 0;

    if (touchable) {
      html.addEventListener("touchmove", _onEndReached);
    } else {
      html.addEventListener("wheel", _onEndReached);
    }

    return () => {
      if (touchable) {
        html.removeEventListener("touchmove", _onEndReached);
      } else {
        html.removeEventListener("wheel", _onEndReached);
      }
    };
  }, [disabled, _onEndReached]);
};

export default useOnEndReached;
