import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";
import one from "../../../svg/card_4.svg";
import two from "../../../svg/card_5.svg";
import tree from "../../../svg/card_6.svg";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
export const SliderByInput = () => {
  const { result } = useTypedSelector((state) => state.socials);
  const [state, setState] = useState({
    goToSlide: 1,
    offsetRadius: 3,
    showNavigation: false,
    config: config.gentle,
  });

  let slides = [
    {
      key: 0,
      content: <img src={one} alt="own_image" />,
    },
    {
      key: 1,
      content: <img src={two} alt="own_image" />,
    },
    {
      key: 2,
      content: <img src={tree} alt="own_image" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });
  useEffect(() => {
    if (result >= 10000 && result <= 49999) {
      setState({ goToSlide: slides[0].key });
    } else if (result >= 50000 && result <= 99999) {
      setState({ goToSlide: slides[1].key });
    } else if (result >= 100000) {
      setState({ goToSlide: slides[2].key });
    } else {
      return setState({ goToSlide: slides[0].key });
    }
  }, [result]);
  return (
    <div
      style={{ width: "100%", height: "400px", margin: "0 auto" }}
      className="content-slider"
    >
      {state.goToSlide === 0 && (
        <h2 alt="img_1" className="dragon-name">
          Ario
        </h2>
      )}
      {state.goToSlide === 1 && (
        <h2 alt="img_1" className="dragon-name">
          Miro
        </h2>
      )}
      {state.goToSlide === 2 && (
        <h2 alt="img_1" className="dragon-name">
          Neo
        </h2>
      )}
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      {state.goToSlide === 0 && (
        <pre alt="img_2" className="dragon-name .price-dragon">
          10.000 xSWT <br /> Guaranteed Allocation
        </pre>
      )}
      {state.goToSlide === 1 && (
        <pre alt="img_2" className="dragon-name  price-dragon">
          50.000 xSWT <br /> Guaranteed Allocation
        </pre>
      )}
      {state.goToSlide === 2 && (
        <pre alt="img_2" className="dragon-name price-dragon">
          100.000 xSWT <br /> Guaranteed Allocation
        </pre>
      )}
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      ></div>
    </div>
  );
};
