import React from "react";

export default function Contact() {
  return (
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
        <i className="i fab fa-github" alt="github icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/wesley-coderre/"
        className="link"
        aria-label="linkedin"
      >
        <i className="i fab fa-linkedin" alt="Linked In icon"></i>
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
        <i className="i fas fa-paper-plane" alt="paper airplane email icon" />
        <p
          style={{
            fontSize: "0.2em",
            margin: "50px 0px 30px 0px",
            fontFamily: "Helvetica",
          }}
        >
          wesley.coderre@gmail.com
        </p>
      </a>
    </section>
  );
}
