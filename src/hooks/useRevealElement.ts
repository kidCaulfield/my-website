import { useRef, useEffect } from "react";

export const useRevealElement = (options: object) => {
  const { transition, ...config }: any = options;

  const containerRef = useRef(null);

  const callback = (entries: any) => {
    const [entry] = entries;
    const {
      target: { classList },
    } = entry;
    if (entry.isIntersecting) {
      classList.remove("hide");
      classList.add(...transition);
    } else {
      classList.remove(...transition);
      classList.add("hide");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, config);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return [containerRef];
};
