import React, { useEffect, useRef } from "react";
import { useScroll } from "../../../hooks/useScroll";
import {
  container,
  heading,
  typewriter,
  typewriterH1,
  // @ts-ignore
} from "./cover.module.css";

export default function Cover() {
  const titleRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (titleRef.current) {
      // @ts-ignore
      titleRef.current.style.marginLeft = `${scrollY * 2}px`;
    }
  }, [scrollY]);

  return (
    <div ref={titleRef} className={container}>
      <h1 className={heading}>Wes Coderre</h1>
      <div>
        <div className={typewriter}>
          <h1 className={typewriterH1}>Developer & Designer</h1>
        </div>
      </div>
    </div>
  );
}
