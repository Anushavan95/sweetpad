import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PoolIcon from "../../../svg/pool-card-icon.png";

export default function LivePools() {
  const [pools, setPools] = useState<any>([]);
  useEffect(() => {
    for (let i = 0; i < 1; i++) {
      setPools((prevPolls: any) => {
        return [
          ...prevPolls,
          {
            // count: "1 , 6M USDCC",
            // followers: "12 000",
            // img: PoolIcon,
            // name: "Name",
            // info: "info About Pool",
            soon: "PROJECTS WILL BE REVEALED SOON",
          },
        ];
      });
    }
  }, []);

  return (
    <>
      <div className="pool-title">
        <Button>LivePools</Button>
      </div>
      <div className="live-pools">
        {pools.map((poolItem: any, index: number) => {
          return (
            <div
              key={index}
              className="pool-card"
              // style={{ width: "400px", height: "250px" }}
            >
              <p style={{ textAlign: "center" }}>{poolItem.soon}</p>
              {/* <div>
                <div className="name-pool">
                  <img src={poolItem.img} alt="PoolIcon" />
                  <p>{poolItem.name}</p>
                  <span> Info about pool</span>
                </div>
              </div>
              <div className="info-pool-card">
                <h6 className="total-price-title">Total rise</h6>
                <h3>{poolItem.count}</h3>
                <span>Followers</span>
                <p>{poolItem.followers}</p>
                <div className="details-btn">
                  <Button className="poll-details">More details</Button>
                </div>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}
