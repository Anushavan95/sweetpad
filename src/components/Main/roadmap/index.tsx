import { Button } from "@chakra-ui/react";

import Done from "../../../svg/Done";

import React from "react";

export default function Roadmap() {
  return (
    <div className="roadMap_container" id="road">
      <div className="pool-title">
        <Button>Roadmap</Button>
      </div>
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="quarters-item">
            <div className="quarters-item-child">
              <div className="title-quarter">{/* <h3>Quarter 1</h3> */}</div>
              <ul>
                <li>
                  Seed Phase
                  <label className="done-label">
                    <Done />
                  </label>
                </li>
                <li>
                  100,000 Community
                  <label className="done-label">
                    <Done />
                  </label>
                </li>

                <li>
                  Whitepaper
                  <label className="done-label">
                    <Done />
                  </label>
                </li>
                <li>
                  CoinMarketCap <br />
                  ICO listing
                  <label className="done-label">
                    <Done />
                  </label>
                </li>
                <li>
                  NFT Airdrop
                  <label className="done-label">
                    <Done />
                  </label>
                </li>

                <li> Community</li>
              </ul>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="carousel-item active "> */}
          <div className="quarters-item">
            <div className="quarters-item-child">
              <div className="title-quarter">{/* <h3>Quarter 2</h3> */}</div>
              <ul>
                <li>SWT coin Airdrop</li>
                <li>Public Sale</li>
                <li>Platform Launch </li>
                <li>Staking Launch</li>
                <li>Partnerships</li>
                <li>NFT Release</li>
                <li>NFT Marketplace </li>
                <li>
                  Listing on Different <br></br>
                  Exchanges
                </li>
                <li>CoinGecko Listing</li>
                <li className="querater-item-last-child">
                  Influencer Marketing Push
                </li>
                {/* <li>100,000 Community</li> */}
              </ul>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="carousel-item active"> */}
          <div className="quarters-item">
            <div className="quarters-item-child">
              <div className="title-quarter">{/* <h3>Quarter 3</h3> */}</div>
              <ul>
                <li>Exchanger Launch</li>
                <li> Pools Opening</li>
                <li> 150,000 Community</li>
                <li> 5,000 Holders</li>
                <li> NFT Game</li>
                <li>Pools Openning</li>
              </ul>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="carousel-item active"> */}
          <div className="quarters-item">
            <div className="quarters-item-child">
              <div className="title-quarter">{/* <h3>Quarter 4</h3> */}</div>
              <ul>
                <li>Start Sweet Game</li>
                <li> Start Sweet Metaverse</li>
                <li>200,000 Community</li>
                <li>10,000 Holders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
