import React from "react";
import Media from "../assets/Media.webm";

export default function MediaDragon() {
  return (
    <video autoPlay loop muted className="buy-dragon-video drag-tokeno-img">
      <source src={Media} type="video/mp4" />
    </video>
  );
}
