import React from "react";
import type { HeadFC, PageProps } from "gatsby";;
import "../styles/global.css";
import IconSphere from "../components/IconSphere";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section className="center">
        <IconSphere />
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
