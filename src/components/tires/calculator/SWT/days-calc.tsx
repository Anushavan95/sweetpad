import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { addDays } from "../../../../helper/date";

import { ReactComponent as MinusPassive } from "../../../../icons/minus passive.svg";
import { ReactComponent as Minus } from "../../../../icons/minus.svg";
import { ReactComponent as PlusPassive } from "../../../../icons/plus passive.svg";
import { ReactComponent as Plus } from "../../../../icons/plus.svg";
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

export default function DaysCalc({
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
    <>
      <div className={"calculator-sweetcoin"}>
        <p className="calculator-sweetcoin-text">Days you lock tokens for</p>
        <InputGroup className="input-group">
          <InputLeftElement className="input-group-left">
            {isDisabledMinus ? (
              <MinusPassive className="plus-min" />
            ) : (
              <Minus className="plus-min" onClick={handleDeCrease} />
            )}
          </InputLeftElement>
          <InputRightElement className="right-group">
            {isDisabledPlus ? (
              <PlusPassive className="plus-min" />
            ) : (
              <Plus className="plus-min" onClick={handleInCrease} />
            )}
          </InputRightElement>
          <Input
            type="number"
            className="year-input"
            value={days === 0 ? "" : days}
            onChange={handleChangeDays}
            onBlur={handleBlurDays}
            placeholder=""
          />
        </InputGroup>
      </div>

      <p className="warning-text war-text">{warningText}</p>
      <Input
        className="calculator-sweetcoin-footer-input swt-input"
        style={{ cursor: "pointer" }}
        type="text"
        placeholder="0.00 sweet"
        onChange={() => {}}
        readOnly={true}
        value={`${result.toFixed(2)} xSWT`}
      />
      <div className="until-and-error-text">
        {Number(result.toFixed(2)) < 10000 && Number(result.toFixed(2)) > 0 ? (
          <p className="warning-text-error">At least 10.000 xSWT is required</p>
        ) : (
          <p></p>
        )}
        {/* <div className="line-calc">
          <span></span> <strong>or</strong> <span></span>
        </div> */}
      </div>
      <p className="calculator-left-align-footer">
        {`Locked until ${addDays(days)}`}
      </p>
    </>
  );
}
