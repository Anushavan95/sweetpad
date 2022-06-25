import React from "react";
import { Button, Input } from "@chakra-ui/react";
import DaysCalc from "../SWT/days-calc";

interface Iprops {
  isDisabledMinus: boolean;
  handleDeCrease: () => void;
  isDisabledPlus: boolean;
  days: number;
  handleInCrease: () => void;
  handleChangeDays: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlurDays: (e: any) => void;
  warningText: string;
  result: number;
}
export default function Liquidity({
  isDisabledMinus,
  handleDeCrease,
  isDisabledPlus,
  days,
  handleInCrease,
  handleChangeDays,
  handleBlurDays,
  warningText,
  result,
}: Iprops) {
  return (
    <div className="add-liquidity">
      <h2>Cooming Soon</h2>
      {/* <p className="text-title-liquidity">
        By adding your liquidity calculate how many tokens you will recieve
        depending on your lock time
      </p>
      <div className="wbnb-swt">
        <span>WBNB-SWT</span>
        <Input placeholder={"0.00 WBNB  "} />
      </div>
      <Input placeholder="0.00 LP" />
      <DaysCalc
        isDisabledMinus={isDisabledMinus}
        handleDeCrease={handleDeCrease}
        isDisabledPlus={isDisabledPlus}
        handleInCrease={handleInCrease}
        days={days}
        handleChangeDays={handleChangeDays}
        handleBlurDays={handleBlurDays}
        warningText={warningText}
        result={result}
      />
      <div className="add-liqui-stack">
        <Button> Add Liquidity & Stake</Button>
      </div> */}
    </div>
  );
}
