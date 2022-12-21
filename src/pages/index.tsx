import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Skills from "../components/Article/Skills";
import Cover from "../components/Article/Cover";
import Contact from "../components/Article/Contact";
import HeroImage from "../components/images/HeroImage";
import IconSphere from "../components/animations/IconSphere";
import { url } from "inspector";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section id="hero" className="hero bg-black center">
        <HeroImage>
          <Cover />
        </HeroImage>
      </section>
      <section id="skills" className="hero bg-black center">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section id="technology" className="hero center bg-fixed">
        <div className="center column frame ">
          <h1 className="white pattaya">Technology</h1>
          <div>
            <IconSphere radius={400} />
          </div>
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
      href="/fonts/pacifico/Pacifico.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="pacifico"
    />
    <link
      href="/fonts/pacifico/Pacifico-Regular.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="pacifico-regular"
    />
    <link
      href="/fonts/Pattaya/Pattaya-Regular.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="pattaya-regular"
    />
    {/* <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link> */}
    <script src="https://kit.fontawesome.com/711dae3be5.js"></script>
  </>
);
