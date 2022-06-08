import React from "react";
import dragonhello from "../assets/dragon.webm";

export default function DragonVideo() {
  return (
    <video autoPlay loop muted className="hellodrag">
      <source src={dragonhello} type="video/mp4" />
    </video>
  );
}
