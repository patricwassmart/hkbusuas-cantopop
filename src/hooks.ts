import { useEffect } from "react";

type ScrollCallback = (event: Event) => void;

const callbacks = new Set<ScrollCallback>();
let currentScrollListener: ((event: Event) => void) | null = null;
export function useScroll(callback: ScrollCallback) {
  useEffect(() => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  }, [callback]);
  if (!currentScrollListener) {
    currentScrollListener = (event: Event) => {
      callbacks.forEach((cb) => cb(event));
    };
    window.addEventListener("scroll", currentScrollListener);
  }
}