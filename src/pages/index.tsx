import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import Skills from "../components/section/Skills";
import Cover from "../components/section/Cover";
import Contact from "../components/section/Contact";
import { StaticImage } from "gatsby-plugin-image";
import Technology from "../components/section/Technology";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <StaticImage
        style={{
          position: "fixed",
          height: "100vh",
          zIndex: -1,
        }}
        src="../images/glacier-clouds.jpg"
        alt="glacier-clouds"
        placeholder="none"
        objectFit="cover"
        loading="lazy"
      />
      <Cover />
      <Skills />
      <Technology />
      <Contact />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Wes Coderre</title>
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
    <script src="https://kit.fontawesome.com/711dae3be5.js"></script>
  </>
);
