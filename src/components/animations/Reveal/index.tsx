import React from "react";
import { useRevealElement } from "../../../hooks/useRevealElement";
import "../../../styles/animation.css"

export default function Reveal({ transition, options, children, ...props }: any) {
  const {from} = transition;
  const [constainerRef] = useRevealElement(options, transition);

  return (
    <div ref={constainerRef} className={from} {...props}>
      {children}
    </div>
  );
}
