import React from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import "../../../styles/animation.css";

export default function Reveal({
  transition,
  options,
  children,
  ...props
}: any) {
  const { from, to } = transition;

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

  const [constainerRef]: any = useIntersectionObserver(options, callback);

  return (
    <div ref={constainerRef} className={from} {...props}>
      {children}
    </div>
  );
}
