import React, { useRef } from "react";
import HeroImage from "../../images/HeroImage";
import {
  container,
  heading,
  typewriter,
  typewriterH1,
  // @ts-ignore
} from "./cover.module.css";

export default function Cover() {
  const titleRef = useRef(null);

  return (
    <section id="hero" className="hero center bg-black">
      <HeroImage>
        <article ref={titleRef} className={container}>
          <h1 className={heading}>Wes Coderre</h1>
          <div>
            <div className={typewriter}>
              <h1 className={typewriterH1}>Developer & Designer</h1>
            </div>
          </div>
        </article>
      </HeroImage>
    </section>
  );
}
