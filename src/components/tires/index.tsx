import React, { useState, useEffect } from "react";
import Calculator from "./calculator";
import "./index.scss";
import { Slider } from "./3dSlider/Sider";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SliderByInput } from "./3dSlider/SliderByInput";
import { Button } from "@chakra-ui/react";

interface Iprops {
  isTabletOrMobile?: boolean;
  method?: string;
}
const Tires = ({ isTabletOrMobile, method }: Iprops) => {
  const [days, setDays] = useState<number>(365);
  const [card, setCard] = useState<string>("The Skater");
  const { result, disabledTab } = useTypedSelector((state) => state.socials);
  const changeCardHandler = (card: string, num: number) => {
    setCard((card) => {
      return card;
    });
  };
  useEffect(() => {
    renderComponent();
  }, [disabledTab]);
  const renderComponent = () => {
    // @ts-ignore
    return disabledTab ? <SliderByInput /> : <></>;
  };

  return (
    <div className="tires-calc">
      <section className="content-container">
        {isTabletOrMobile ? (
          <>
            {method === "calculator" ? (
              <>
                {" "}
                <div className="pool-title">
                  <Button id="calculator-id">Calculator</Button>
                </div>
                <div className="columns calc-columns">
                  <div className="tire-container">
                    <Calculator
                      days={days}
                      setDays={(value) => {
                        setDays(value);
                      }}
                      changeCardHandler={(card, num) => {
                        changeCardHandler(card, num);
                      }}
                      setCard={(card) => {
                        setCard(card);
                      }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* <div className="pool-title">
                  <Button id="calculator-id">Tiers</Button>
                </div> */}
                <div className="columns col-calculator">
                  <div
                    className="tire-container tire-cards"
                    style={{ display: "block" }}
                  >
                    {renderComponent()}
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            <div className="columns calc-columns">
              {/* <div className="pool-title">
                <Button id="calculator-id">Tiers</Button>
              </div> */}
              <div className="tire-container">
                <Calculator
                  days={days}
                  setDays={(value) => {
                    setDays(value);
                  }}
                  changeCardHandler={(card, num) => {
                    changeCardHandler(card, num);
                  }}
                  setCard={(card) => {
                    setCard(card);
                  }}
                />
              </div>
            </div>

            <div className="columns col-calculator">
              <div
                className="tire-container tire-cards"
                style={{ display: "block" }}
              >
                {renderComponent()}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
export default Tires;
