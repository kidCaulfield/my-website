import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/global.css";
import IconSphere from "../components/animations/IconSphere";
import Skills from "../components/Article/Skills";
import Cover from "../components/Article/Cover";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <section id="hero" className="hero center">
        <Cover />
      </section>
      <section id="skills" className="hero center">
        <div className="container">
          <Skills />
          <IconSphere radius={300} />
        </div>
      </section>
      <section
        id="contact"
        className="hero center column"
        style={{ justifyContent: "space-evenly" }}
      >
        <h1 className="white pacifico">Contact</h1>
        {/* <h2 id="resume" onClick={showResume}>
          View Resume
          <br />
          <i className="i fas fa-scroll"></i>
        </h2> */}
        {/* <iframe
          title="resume"
          className="view-resume close"
          src="https://drive.google.com/file/d/1DQtMs6bryRiER1p_Bh7DL8VJgLOzNajz/preview"
        ></iframe> */}
        <a
          href="https://github.com/kidCaulfield"
          className="link"
          aria-label="git"
        >
          <i className="i fab fa-github white" alt="github icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/wesley-coderre/"
          className="link"
          aria-label="linkedin"
        >
          <i className="i fab fa-linkedin white" alt="Linked In icon"></i>
        </a>
        <a
          href="mailto:wesley.coderre@gmail.com"
          className="link"
          aria-label="mail"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <i
            className="i fas fa-paper-plane white"
            alt="paper airplane email icon"
          />
          <p
            style={{
              fontSize: "1.2em",
              margin: "50px 0px 30px 0px",
              fontFamily: "Helvetica",
              color: "white",
            }}
          >
            wesley.coderre@gmail.com
          </p>
        </a>
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
    <script src="https://kit.fontawesome.com/711dae3be5.js"></script>
  </>
);
