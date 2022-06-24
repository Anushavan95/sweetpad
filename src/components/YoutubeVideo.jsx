import React from "react";
import Youtube from "../assets/Youtube.webm";

export default function YoutubeVideo() {
  return (
    <video autoPlay loop muted className="" style={{ width: "200px" }}>
      <source src={Youtube} type="video/mp4" />
    </video>
  );
}
