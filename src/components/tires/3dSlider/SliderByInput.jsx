import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";
import one from "../../../svg/card_4.svg";
import two from "../../../svg/card_5.svg";
import tree from "../../../svg/card_6.svg";
import Airo from "../../../svg/Ario.svg";
import AiroBottom from "../../../svg/Airo_2.svg";
import Miro from "../../../svg/Miro.svg";
import MiroBottom from "../../../svg/MIro_2.svg";
import Neo from "../../../svg/Neo.svg";
import NeoBottom from "../../../svg/Neo_2.svg";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
export const SliderByInput = () => {
  const { result } = useTypedSelector((state) => state.socials);
  const [state, setState] = useState({
    goToSlide: 1,
    offsetRadius: 3,
    showNavigation: false,
    config: config.gentle
  });

  let slides = [
    {
      key: 0,
      content: <img src={one} alt="own_image" />
    },
    {
      key: 1,
      content: <img src={two} alt="own_image" />
    },
    {
      key: 2,
      content: <img src={tree} alt="own_image" />
    }
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
    <div style={{ width: "100%", height: "400px", margin: "0 auto" }} className="content-slider">
      {state.goToSlide === 0 && (
        <img src={Airo} alt="img_1" className="dragon-name" />
      )}
      {state.goToSlide === 1 && (
        <img src={Miro} alt="img_1" className="dragon-name" />
      )}
      {state.goToSlide === 2 && (
        <img src={Neo} alt="img_1" className="dragon-name" />
      )}
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
      />
      {state.goToSlide === 0 && (
        <img src={AiroBottom} alt="img_2" className="dragon-name" />
      )}
      {state.goToSlide === 1 && (
        <img src={MiroBottom} alt="img_2" className="dragon-name" />
      )}
      {state.goToSlide === 2 && (
        <img src={NeoBottom} alt="img_2" className="dragon-name" />
      )}
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around"
        }}
      ></div>
    </div>
  );
};
