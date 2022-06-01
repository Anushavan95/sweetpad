import React from "react";
import videoBg from "../assets/BG1.mp4";
export default function VideoComponent() {
  return (
    <section className="header-section component-section" id="buy-scroll-to">
      <video id="myVideo" src={videoBg} autoPlay loop muted />
    </section>
  );
}
