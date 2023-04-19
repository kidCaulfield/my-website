import React from "react";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";
import "../../../styles/animation.css";

type RevealProps = {
  transition: {
    from: any;
    to: any;
  };
  options: object;
  description: string;
  children: JSX.Element | JSX.Element[];
  props: any;
};

export default function Reveal({
  transition,
  options,
  children,
  ...props
}: RevealProps) {
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

  const [containerRef]: any = useIntersectionObserver(callback, options);

  return (
    <div ref={containerRef} className={from} {...props}>
      {children}
    </div>
  );
}
