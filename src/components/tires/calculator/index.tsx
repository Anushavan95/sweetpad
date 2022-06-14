import React, { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../../store/reducers/socials/action-creators";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LPstacking from "./LP Stacking/lp-stacking";
import Liquidity from "./Liquidity/Liquidity";
import NFTstacking from "./NFT/nft-stacking";
import SWTcalc from "./SWT/swt-calc";
import DaysCalc from "./SWT/days-calc";
import BuyNFT from "./NFT/Buy-NFT";
import BuySweetButton from "../../walletConnect/BuySweetButton";
import SwtStacking from "./SwtStacking";
interface Props {
  days: number;
  setDays: (value: any) => void;
  setCard: (val: any) => void;
  changeCardHandler: (card: any, num: number) => void;
}

const Calculator = ({ days, setDays, setCard, changeCardHandler }: Props) => {
  let addres = localStorage.getItem("walletconnectedaddress");

  const [sweetCoin, setSweetCoin] = useState<string>("1000000");
  const [disableTab, setDisableTab] = useState<boolean>(true);
  const [disableInput, setDisableInput] = useState<boolean>(false);
  const [result, setResult] = useState<number>(0);
  const [warningText, setWarningText] = useState<string>("");
  const [isDisabledPlus, setIsDisabledPlus] = useState<boolean>(false);
  const [isDisabledMinus, setIsDisabledMinus] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleChangeCoin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSweetCoin(e.target.value);
    if (Number(sweetCoin) !== 0) {
      setDisableTab(true);
    } else if (Number(sweetCoin) === 0) {
      setDisableTab(false);
    }
    setDisableInput(false);
  };
  const handleFocus = () => {
    setDisableTab(true);
    setDisableInput(false);
  };
  const handleChangeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    setDays(value);
  };

  useEffect(() => {
    if (days === 182) {
      setResult(0.5 * Number(sweetCoin));
    }
    if (days >= 183 && days <= 365) {
      setResult((1 / 365) * days * Number(sweetCoin));
    } else if (days >= 366 && days <= 1095) {
      setResult(((2 / 730) * ((days - 365) / 2) + 1) * Number(sweetCoin));
    }
  }, [sweetCoin, days]);

  useEffect(() => {
    if (days <= 182) {
      setIsDisabledMinus(true);
    } else if (days >= 1095) {
      setIsDisabledPlus(true);
      setIsDisabledMinus(false);
    } else {
      setIsDisabledPlus(false);
      setIsDisabledMinus(false);
    }
    if (days < 182) {
      setWarningText("Required minimum day is 182 ");
    } else if (days > 1095) {
      setIsDisabledPlus(true);
      setIsDisabledMinus(false);

      setWarningText("Required maximum day is 1095");
    } else {
      setWarningText("");
    }
  }, [days]);

  const handleInCrease = () => {
    setDays((prev: any) => {
      if (prev >= 1095) {
        setIsDisabledPlus(true);
        return 1095;
      } else {
        return prev + 1;
      }
    });
  };
  const handleDeCrease = () => {
    setDays((prev: any) => {
      if (prev <= 182) {
        setIsDisabledMinus(true);
        return 182;
      } else {
        return prev - 1;
      }
    });
  };
  const handleBlurDays = (e: any) => {
    let value = Number(e.target.value);
    if (e.target.value < 182) {
      value = 182;
    } else if (e.target.value > 1095) {
      value = 1095;
    }
    setDays(value);
  };

  useEffect(() => {
    result > 0
      ? dispatch(SocialActionCreators.setResultSlider(result))
      : dispatch(SocialActionCreators.setResultSlider(0));
  }, [result]);
  const buyAddres = () => {
    alert("account yes");
  };
  return (
    <React.Fragment>
      <Box className={"calculator"}>
        <Tabs variant="enclosed" className="swt-chakra-tabs">
          <TabList className="list-calc-tabs">
            <Tab>
              <pre>SWT Calculator</pre>{" "}
            </Tab>
            <Tab>
              <pre>LP Staking</pre>
            </Tab>
            <Tab>
              <pre>ADD Liquidity</pre>
            </Tab>
            <Tab>
              <pre>NFT Staking</pre>
            </Tab>
          </TabList>
          <div className="calculator-content">
            <TabPanels>
              <TabPanel>
                <React.Fragment>
                  <div className="swt-calculator">
                    <h2>Calculate your SWT</h2>
                    <p className="calculator-text">
                      depending on the amount of staked tokens and your lock
                      time.
                    </p>
                  </div>
                  <SWTcalc
                    disableInput={disableInput}
                    sweetCoin={sweetCoin}
                    handleFocus={handleFocus}
                    handleChangeCoin={handleChangeCoin}
                  />
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
                  <Box className="buttons-group">
                    <div className="swt-nft-buttons">
                      <BuySweetButton btnName={"Buy-SWT"} />
                      <BuyNFT />
                    </div>
                    <div>
                      {addres ? (
                        <SwtStacking />
                      ) : (
                        <BuySweetButton btnName={"Connect Wallet"} />
                      )}
                    </div>
                  </Box>
                </React.Fragment>
              </TabPanel>
              <TabPanel>
                <LPstacking
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
              </TabPanel>
              <TabPanel>
                <Liquidity
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
              </TabPanel>
              <TabPanel>
                <NFTstacking />
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </Box>
    </React.Fragment>
  );
};
export default Calculator;
