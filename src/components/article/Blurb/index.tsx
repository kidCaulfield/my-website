import React from "react";
import Reveal from "../../animations/Reveal";

type BlurbProps = {
  title: JSX.Element;
  className: string;
  description: string;
};

export default function Blurb({ title, className, description }: BlurbProps) {
  return (
    <>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in", "pattaya"],
        }}
      >
        {title}
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slow", "helvetica"],
          }}
        >
          <div className={className} />
        </Reveal>
      </Reveal>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in-slower", "helvetica"],
        }}
      >
        <p>{description}</p>
      </Reveal>
    </>
  );
}
