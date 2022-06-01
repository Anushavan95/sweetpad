import React from "react";
import { Button } from "@chakra-ui/react";
import Done from "../../../svg/Done";
// import BuySweetButton from "../../walletConnect/BuySweetButton";

export default function RoadmapSecond() {
  return (
    <div className="second-roadmap">
      <div className="second-roadmap-title">
        <div className="pool-title">
          <Button className="title-roadmap-second" id="private-sale">
            <pre className="sec-road-title">
              YOUR BIG OPPORTUNITY MAY BE RIGHT WHERE YOU ARE NOW <br />
              <strong className="second-line">
                Seize it and be one of early holders of SWT token
              </strong>
            </pre>
          </Button>
        </div>

        {/* <span className="second-span">
          Seize it and be one of early holders of SWT token
        </span> */}
      </div>
      <section className="quarter-section item-second-roadmap">
        <div className="quarters-item">
          <div className="quarters-item-child">
            <div className="title-quarter">
              <h3>Seed Round</h3>
            </div>
            <ul>
              <li>
                Time <br></br>
                01 Dec 2021 - 31 Dec 2021
              </li>
              <li>
                Token Amount <br></br>
                4,000,000 SWT
              </li>
              <li>
                Price <br></br> $0,1
              </li>
            </ul>
          </div>

          <label className="close-label">
            <Done /> Closed
          </label>
        </div>
        <div className="quarters-item">
          <div className="quarters-item-child">
            <div className="title-quarter">
              <h3>Private Round</h3>
            </div>
            <ul>
              <li>
                Time<br></br>
                01 Jan 2022 - 19 Jun 2022
                {/* <label className="done-label"></label> */}
              </li>
              <li>
                Token Amount <br></br>
                15,000,000 SWT
              </li>
              <li>
                Price <br></br> $0,25
              </li>
            </ul>
            {/* <div
              style={{ textAlign: "center", paddingBottom: "23px" }}
              className="buy-sweet-roadmap"
            >
              <BuySweetButton btnName={"Buy Sweets"} />
            </div> */}
          </div>
        </div>

        <div className="quarters-item">
          <div className="quarters-item-child">
            <div className="title-quarter">
              <h3>IDO Round</h3>
            </div>
            <ul>
              <li>
                Time<br></br>
                20 Jun 2022 (15:00 UTC)
                {/* <label className="done-label"><Done /></label> */}
              </li>
              <li>
                Token Amount <br></br>
                5,000,000 SWT
              </li>
              <li>
                Price <br></br> $0,50{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
