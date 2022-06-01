import { Input } from "@chakra-ui/react";
import React from "react";

interface Iprops {
  disableInput: boolean;
  sweetCoin: string | number;
  handleFocus: () => void;
  handleChangeCoin: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SWTcalc({
  disableInput,
  sweetCoin,
  handleFocus,
  handleChangeCoin,
}: Iprops) {
  return (
    <div>
      <div className={"calculator-sweetcoin"}>
        <p className="calculator-sweetcoin-title">SWT</p>
        <Input
          className={`calculator-sweetcoin-input ${
            disableInput ? "disabledInputActive" : ""
          }`}
          type="text"
          placeholder="0.00"
          value={sweetCoin}
          onFocus={handleFocus}
          onChange={handleChangeCoin}
        />
      </div>
    </div>
  );
}
