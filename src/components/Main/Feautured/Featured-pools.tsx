import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Arrow from "../../../svg/arrow-up.png";

export default function FeaturedPools() {
  const [pools, setPools] = useState<any>([]);
  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      setPools((prevPolls: any) => {
        return [
          ...prevPolls,
          {
            count: "238 000",
            followers: "12 000",
            name: "Name",
            info: "info About Pool",
            pos: "0,07",
            countX: "71.00x",
          },
        ];
      });
    }
  }, []);
  return (
    <div>
      <div className="pool-title">
        <Button>Featured Pools</Button>
      </div>
      <ul className="feautured-pool-list-parent">
        {pools.map((poolsItem: any) => {
          return (
            <li className="feautured-pool-list">
              <div className="name-pool">
                <p> {poolsItem.name} </p>
                <span>{poolsItem.info}</span>
              </div>{" "}
              <strong>SLC</strong>
              <span>{poolsItem.count}</span>
              <span>{poolsItem.pos}</span>
              <div className="countx-pool">
                <img src={Arrow} />
                <span>{poolsItem.countX}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
