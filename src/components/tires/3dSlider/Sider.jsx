import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";
import one from "../../../svg/card_1.svg";
import two from "../../../svg/card_2.svg";
import tree from "../../../svg/card_3.svg";
import dragons from "../../../svg/dragon_1.svg";
import dragonsBottom from "../../../svg/dragon_2.svg";
import frodo from "../../../svg/frodo_1.svg";
import frodoBottom from "../../../svg/frodo_2.svg";
import hugo from "../../../svg/hugo.svg";
import hugoBottom from "../../../svg/hugo_2.svg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
export const Slider = () => {
  const { sliderIndex } = useTypedSelector((state) => state.socials);
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    animationConfig: {
      tension: 220,
      friction: 20,
    },
  });

  let slides = [
    {
      key: 2,
      content: <img src={one} alt="own_image" />,
    },
    {
      key: 1,
      content: <img src={two} alt="own_image" />,
    },
    {
      key: 3,
      content: <img src={tree} alt="own_image" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });
  useEffect(() => {
    setState({ goToSlide: sliderIndex });
  }, [sliderIndex]);

  return (
    <div
      style={{ width: "100%", height: "400px", margin: "0 auto" }}
      className="content-slider"
    >
      {state.goToSlide === 0 && (
        <img src={dragons} alt="img_1" className="dragon-name" />
      )}
      {state.goToSlide === 1 && (
        <img src={frodo} alt="img_1" className="dragon-name" />
      )}
      {state.goToSlide === 2 && (
        <img src={hugo} alt="img_1" className="dragon-name" />
      )}
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.animationConfig}
      />
      {state.goToSlide === 0 && (
        <img src={dragonsBottom} alt="img_2" className="dragon-name" />
      )}
      {state.goToSlide === 1 && (
        <img src={frodoBottom} alt="img_2" className="dragon-name" />
      )}
      {state.goToSlide === 2 && (
        <img src={hugoBottom} alt="img_2" className="dragon-name" />
      )}
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      />
    </div>
  );
};
