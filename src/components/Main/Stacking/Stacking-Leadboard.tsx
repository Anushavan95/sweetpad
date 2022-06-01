import React, { useEffect, useState } from "react";

export default function StackingLeadboard() {
  const [stacking, setstacking] = useState<any>([]);
  // useEffect(() => {
  //   for (let i = 0; i < 6; i++) {
  //     setPools((prevPolls: any) => {
  //       return [
  //         ...prevPolls,
  //         {
  //           count: "1 , 6M USDCC",
  //           followers: "12 000",
  //           img: PoolIcon,
  //           name: "Name",
  //           info: "info About Pool",
  //         },
  //       ];
  //     });
  //   }
  // }, []);
  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      setstacking((prevStacking: any) => {
        return [
          ...prevStacking,
          {
            count: "270.32",
            name: "Display name",
            info: "Lockted",
            days: "364 days",
          },
        ];
      });
    }
  }, []);

  return (
    <div className="stacking-leaderboard-section">
      {/* StackingLeadboard */}
      <ul className="leaderboard-lists">
        {stacking.map((item: any, index: number) => {
          return (
            <li className="leaderboard-list-items">
              <span>{index}</span> <h5> {item.name}</h5>{" "}
              <span>{item.info}</span>
              <span>{item.days}</span>
              <span>{item.count}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
