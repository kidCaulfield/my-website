import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroImage({ children }: { children: any }) {
  return (
    <div style={{ display: "grid", height: "100vh", width: "100vw" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
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
