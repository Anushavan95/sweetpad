import React from "react";
import SweetStep from "../../svg/sweet-step.svg";
import Check from "../../svg/check.svg";
const steps = [
  { id: 1, img: Check, line: true, status: false },
  { id: 2, img: Check, line: true, status: false },
  { id: 3, img: Check, line: true, status: false },
  { id: 4, img: Check, line: true, status: false },
  { id: 5, img: Check, line: true, status: false },
  { id: 6, img: Check, line: true, status: false },
  { id: 7, img: Check, line: true, status: false },
  // { id: 8, img: Check, line: true, status: false },
  // { id: 9, img: Check, line: true, status: false }
];

function Step({ activeStep }) {
  return (
    <div className="elem">
      {steps.map((item, index) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              flex: "1 1 100%",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <div className={`circle ${index < activeStep ? "active" : ""}`}>
              <span className="done-step">✓</span>
            </div>
            <div className={`line ${index < activeStep ? "active" : ""}`} />
          </div>
        );
      })}
      <img src={SweetStep} alt="SweetStep" className="sweet-step" />
    </div>
  );
}

export default Step;
