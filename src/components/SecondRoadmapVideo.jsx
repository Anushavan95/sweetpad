import React from "react";
import SecondRoadmapDragon from "../assets/second-roadmap.webm";

export default function SecondRoadmapVideo() {
  return (
    <video autoPlay loop muted className="second-dragon-video ">
      <source src={SecondRoadmapDragon} type="video/mp4" />
    </video>
  );
}
