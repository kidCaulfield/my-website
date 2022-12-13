import { useRef, useEffect, useState } from "react";

/**
 * @param options IntersectionObserver api options
 * @param callback custom logic for observed DOM elements
 * @returns {[containerRef]} react ref
 */

export const useIntersectionObserver = (
  callback: any = (e: any) => e,
  options: object = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
) => {
  const [trigger, setTrigger] = useState();
  const containerRef = useRef(null);

  const getRef = (entries: any) => {
    const [entry] = entries;
    callback(entry);
    if (entry.isIntersecting) setTrigger(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(getRef, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return [containerRef, trigger];
};
