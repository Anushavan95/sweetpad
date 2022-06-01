import { Button } from "@chakra-ui/react";
import React from "react";
import BuyNFT from "./Buy-NFT";

export default function NFTstacking() {
  return (
    <div>
      <h2>My NFTs</h2>
      <div className="nft-cards-section"></div>

      <div className="nft-stack">
        <BuyNFT />
        <Button>Stacke</Button>
      </div>
    </div>
  );
}
