import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroImage({ children }: { children: JSX.Element }) {
  return (
    <div style={{ display: "grid", height: "100vh", width: "100vw" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
        }}
        src="../../../images/misty-forest.jpg"
        alt="misty forest"
        layout="fullWidth"
        placeholder="none"
        loading="lazy"
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
        {children}
      </div>
    </div>
  );
}
