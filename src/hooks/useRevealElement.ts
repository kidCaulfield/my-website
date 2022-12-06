import { useRef, useEffect } from "react";

export const useRevealElement = (options: object, transition: object) => {
  const { from, to}: any = transition;
  const containerRef = useRef(null);

  const callback = (entries: any) => {
    const [entry] = entries;
    const {
      target: { classList },
    } = entry;
    if (entry.isIntersecting) {
      classList.remove(...from);
      classList.add(...to);
    } else {
      classList.remove(...to);
      classList.add(...from);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return [containerRef];
};
