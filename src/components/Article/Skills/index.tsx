import React from "react";
import Reveal from "../../animations/Reveal";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export default function Skills() {
  return (
    <article
      className="column"
      style={{
        width: "300px",
        paddingTop: "50px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in", "pacifico"],
        }}
        options={options}
      >
        <h1>Skills</h1>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slow", "helvetica"],
          }}
          options={options}
        >
          <div className="border-lime" />
        </Reveal>
      </Reveal>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in-slower", "helvetica"],
        }}
        options={options}
      >
        <p>
          Building simple to use and easy to maintain APIs. Responsive and
          engaging frontend interfaces with non-blocking user experience.
          Designing and implementing adaptable and predictable data models using
          high performance database technology. Configuring scalable web servers
          in cloud based infrastructure
        </p>
      </Reveal>
    </article>
  );
}
