import React from "react";
import Airdrop from "../assets/Airdrop.webm";

export default function AirdropDragon() {
  return (
    <video autoPlay loop muted className="airdrop-dragon-video ">
      <source src={Airdrop} type="video/mp4" />
    </video>
  );
}
