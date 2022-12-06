import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import IconSphere from "../components/animations/IconSphere";
import Reveal from "../components/animations/Reveal";
import { css } from "@emotion/react";
import { useStyleCss } from "../hooks/useCSSStyle";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section id="about" className="center hero">
        {/* <div className="about">
          Hello I am Wes Coderre
        </div> */}
        <IconSphere radius={300} />
      </section>
      <section className="hero center column">
        <div>
          <Reveal
            options={{
              root: null,
              rootMargin: "-50px",
              threshold: 1,
              transition: ["white", "animate-left-in", "helvetica"],
            }}
          >
            <h1>Skills</h1>
            <Reveal
              options={{
                root: null,
                rootMargin: "0px",
                threshold: 1,
                transition: ["white", "animate-left-in-slow", "helvetica"]
              }}
            >
              <div className="bg-crimson"/>
            </Reveal>

          </Reveal>
          <div className="hide white">heloo</div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
  </>
);
