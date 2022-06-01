import { Button } from "@chakra-ui/react";
import React from "react";
import Dragon from "../../svg/Sweet_Dragon_33.gif";
import DragonTokeno from "../../../svg/dragon-tokeno.png";

const Tokeno = () => {
  return (
    <div className={"tokeno"}>
      <div className={"title-section"}>
        <div className={"title-tokeno pool-title"} id="tokenomics">
          <Button>Tokenomics</Button>
        </div>
      </div>
      <section className={"card-precent"}>
        <div className={"parent-item-card"}>
          <div className={"item-card"}>
            <p>
              Reserve <strong>25%</strong>{" "}
            </p>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Liquidity 20%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Team 20%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Private Sales 15%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Advisers 5%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Marketing 5%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Seed Stage 4%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Public Sales 5%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
          <div className={"item-card"}>
            <strong>Charity 1%</strong>
            <div className={"liner"}>
              <span className={"item-precent"}></span>
            </div>
          </div>
        </div>
        {/* <img src={Dragon} alt={"Dragon"} className={"dragon-icon"} /> */}
      </section>
      <div className="tokeno-dragon">
        <img src={DragonTokeno} alt="DragonTokeno" />
      </div>
    </div>
  );
};
export default Tokeno;
