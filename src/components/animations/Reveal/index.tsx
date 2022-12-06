import React from "react";
import { useRevealElement } from "../../../hooks/useRevealElement";

export default function Reveal({ options, children, ...props }: any) {
  const [constainerRef] = useRevealElement(options);

  return (
    <div ref={constainerRef} className="hide" {...props}>
      {children}
    </div>
  );
}
