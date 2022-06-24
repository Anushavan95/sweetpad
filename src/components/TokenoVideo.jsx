import React from "react";
import Tokeno from "../assets/tokenomix.webm";

export default function TokenoDragon() {
  return (
    <video autoPlay loop muted className="drag-tokeno-img">
      <source src={Tokeno} type="video/mp4" />
    </video>
  );
}
