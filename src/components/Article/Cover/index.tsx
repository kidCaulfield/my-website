import React, { useRef } from "react";
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
    <article ref={titleRef} className={container}>
      <h1 className={heading}>Wes Coderre</h1>
      <div>
        <div className={typewriter}>
          <h1 className={typewriterH1}>Developer & Designer</h1>
        </div>
      </div>
    </article>
  );
}
