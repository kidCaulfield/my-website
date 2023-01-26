import React from "react";
// @ts-ignore
import { link, container, emailLink, emailText } from "./contact.module.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`hero bg-black center column ${container}`}
    >
      <h1 className="white pacifico">Contact</h1>
      <a
        href="https://github.com/kidCaulfield"
        className={link}
        aria-label="git"
      >
        <i className="i fab fa-github" alt="github icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/wesley-coderre/"
        className={link}
        aria-label="linkedin"
      >
        <i className="i fab fa-linkedin" alt="Linked In icon"></i>
      </a>
      <a
        href="mailto:wesley.coderre@gmail.com"
        className={`${link} ${emailLink}`}
        aria-label="mail"
      >
        <i className="i fas fa-paper-plane" alt="paper-airplane-email-icon" />
        <p className={emailText}>wesley.coderre@gmail.com</p>
      </a>
    </section>
  );
}
