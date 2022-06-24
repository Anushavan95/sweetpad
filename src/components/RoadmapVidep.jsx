import React from "react";
import Roadmap from "../assets/roadmap.webm";

export default function RoadmapVideo() {
  return (
    <video autoPlay loop muted className="buy-dragon-video drag-tokeno-img">
      <source src={Roadmap} type="video/mp4" />
    </video>
  );
}
