import React from "react";
import dragonhello from "../assets/finished-dragon.webm";

export default function FinishedDragon() {
  return (
    <video autoPlay loop muted className="feautured-dragon-video">
      <source src={dragonhello} type="video/mp4" />
    </video>
  );
}
