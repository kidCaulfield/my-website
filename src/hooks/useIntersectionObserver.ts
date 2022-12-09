import { useRef, useEffect } from "react";

/**
 * @param options IntersectionObserver api options
 * @param callback custom logic for observed DOM elements
 * @returns {[containerRef]} react ref
 */

export const useIntersectionObserver = (options: object, callback: any) => {
  const containerRef = useRef(null);

  const getRef = (entries: any) => {
    callback(entries);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(getRef, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return [containerRef];
};
