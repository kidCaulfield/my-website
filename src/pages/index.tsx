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
            transition={{
              from: ["hide-left"],
              to: ["white", "animate-left-in", "helvetica"],
            }}
            options={{
              root: null,
              rootMargin: "-50px",
              threshold: 1,
            }}
          >
            <h1>Skills</h1>
            <Reveal
              transition={{
                from: ["hide-left"],
                to: ["white", "animate-left-in-slow", "helvetica"],
              }}
              options={{
                root: null,
                rootMargin: "0px",
                threshold: 1,
              }}
            >
              <div className="bg-crimson" />
            </Reveal>
          </Reveal>
          <Reveal
            transition={{
              from: ["hide-left"],
              to: ["white", "animate-left-in-slower", "helvetica"],
            }}
            options={{
              root: null,
              rootMargin: "0px",
              threshold: 1,
            }}
          >
            <p>
              Building simple to use and easy to maintain API. Responsive and
              engaging Frontend Interfaces with Function design. Creating data
              models best suited for project intentions and Configuring web
              servers in Cloud environments
            </p>
          </Reveal>
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
