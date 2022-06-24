import React from "react";
import Stacking from "../assets/stacking.webm";

export default function StackingDragon() {
  return (
    <video autoPlay loop muted className="stacking-dragon-img">
      <source src={Stacking} type="video/mp4" />
    </video>
  );
}
