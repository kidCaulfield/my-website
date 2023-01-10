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

  const callback = (entry: any) => {
    const {
      target: { classList },
    } = entry;
    if (entry.isIntersecting) {
      classList.remove(...from);
      classList.add(...to);
    }
  };

  const [constainerRef]: any = useIntersectionObserver(callback, options);

  return (
    <div ref={constainerRef} className={from} {...props}>
      {children}
    </div>
  );
}
