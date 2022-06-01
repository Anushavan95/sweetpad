import { Button, Input } from "@chakra-ui/react";
import React from "react";
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
export default function LPstacking({
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
    <div>
      <h5>Stake your LP and earn xSWT</h5>
      <div className="lp-input-section">
        <span>LP</span>
        <Input />
      </div>

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
      <div className="lp-stack">
        <Button>Stacke</Button>
      </div>
    </div>
  );
}
