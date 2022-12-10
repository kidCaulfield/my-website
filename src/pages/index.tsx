import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import IconSphere from "../components/animations/IconSphere";
import Skills from "../components/Article/Skills";
import Cover from "../components/Article/Cover";
import Contact from "../components/Article/Contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section id="hero" className="hero center">
        <Cover />
      </section>
      <section id="skills" className="hero center">
        <div className="container">
          <Skills />
          {/* <IconSphere radius={300} /> */}
        </div>
      </section>
      <Contact />
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
    <link
      rel="preload"
      href="/fonts/pacifico/Pacifico.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="pacifico"
    />
    <link
      rel="preload"
      href="/fonts/pacifico/Pacifico-Regular.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="pacifico-regular"
    />
    <link
      rel="preload"
      href="/fonts/Pattaya/Pattaya-Regular.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="pattaya-regular"
    />
    <script src="https://kit.fontawesome.com/711dae3be5.js"></script>
  </>
);
