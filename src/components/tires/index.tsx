import React, { useState, useEffect } from "react";
import Calculator from "./calculator";
import "./index.scss";
import { Slider } from "./3dSlider/Sider";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SliderByInput } from "./3dSlider/SliderByInput";
import { Button } from "@chakra-ui/react";

// import OnboardComponent from "../walletConnect/Trust";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Tires = () => {
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
    return disabledTab ? <SliderByInput /> : <Slider />;
  };
  // const [devicetype, setdevicetype] = useState("mobile");
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 2,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 700 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 700, min: 300 },
  //     items: 1,
  //   },
  // };
  return (
    <div className="tires-calc">
      <div className="pool-title">
        <Button id="calculator-id">Tiers</Button>
      </div>
      <section className="content-container">
        {/* <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={devicetype !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={devicetype}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        > */}
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
        <div className="columns col-calculator">
          <div
            className="tire-container tire-cards"
            style={{ display: "block" }}
          >
            {renderComponent()}
          </div>
        </div>
        {/* </Carousel> */}
      </section>
    </div>
  );
};
export default Tires;
