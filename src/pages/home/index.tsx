import React, { useState } from "react";
import { Header, Section, SectionsContainer, Slide } from "react-fullpage";
import { useDispatch } from "react-redux";

import AboutFooter from "../../components/AboutFooter/AboutFooter";
import Footer from "../../components/AboutFooter/footer";
import About from "../../components/Header/about";
import Headera from "../../components/Header/misc/header";
import FeaturedPools from "../../components/Main/Feautured/Featured-pools";
import LivePools from "../../components/Main/LivePools/LivePools";
import Partners from "../../components/Main/partners/Partners";
import RoadMap from "../../components/Main/roadmap";
import RoadmapSecond from "../../components/Main/roadmap/RoadmapSecond";
import StackingLeadboard from "../../components/Main/Stacking/Stacking-Leadboard";
import Tokeno from "../../components/Main/Tokeno";
import SocialLinks from "../../components/social";
import Img from "../../svg/Ario.svg";
import Img2 from "../../svg/0.svg";
import "react-multi-carousel/lib/styles.css";
import Tires from "../../components/tires";
import VideoComponent from "../../components/VideoComponent";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import Carousel from "react-multi-carousel";
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
};
export default function Home() {
  const dispatch = useDispatch();

  const connectWallet = (bool: boolean) => {
    dispatch(SocialActionCreators.setIsConnectButtonClicked(bool));
  };
  let options = {
    //     activeClass:          'active', // the class that is appended to the sections links
    // anchors:              [], // the anchors for each sections
    // arrowNavigation:      true, // use arrow keys
    // className:            'SectionContainer', // the class name for the section container
    // delay:                1000, // the scroll animation speed
    // navigation:           true, // use dots navigatio
    // scrollBar:            false, // use the browser default scrollbar
    // sectionClassName:     'Section', // the section class name
    // sectionPaddingTop:    '0', // the section top padding
    // sectionPaddingBottom: '0', // the section bottom padding
    // verticalAlign:        false
    sectionClassName: "section",
    anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    // sectionPaddingTop: "50px",
    // sectionPaddingBottom: "50px",
    arrowNavigation: true,
  };
  // const horizontalSliderProps = {
  //   name: "horizontalSlider1", // name is required
  //   infinite: true, // enable infinite scrolling
  // };

  // const horizontalSlides = [
  //   <Slide> Slide 2.1 </Slide>,
  //   <Slide> Slide 2.2 </Slide>,
  // ];
  // horizontalSliderProps.slides = horizontalSlides;

  // const slides = [
  //   <Slide> Slide 1 </Slide>,
  //   <horizontalSliderProps {...horizontalSliderProps}></horizontalSliderProps>,
  //   <Slide> Slide 3 </Slide>,
  // ];

  return (
    <div>
      <Header>
        <Headera connectWallet={(bool: boolean) => connectWallet(bool)} />
      </Header>
      <VideoComponent />

      <SectionsContainer {...options}>
        <Section className="component-section">
          <div className="main-content" style={{ paddingTop: "60px" }}>
            <About connectWallet={connectWallet} />
          </div>
        </Section>

        <Section className="component-section">
          <div className="live-pools-conetnt">
            <div className="main-content live-pool">
              <LivePools />
            </div>
          </div>
        </Section>
        <Section className="component-section">
          <div className="live-feautured-conetnt">
            <div className="main-content feautured-pool">
              <FeaturedPools />
            </div>
          </div>
        </Section>
        <Section className="component-section">
          <div className="tires-content">
            <div className="main-content partners-main">
              <Tires />
            </div>
          </div>
        </Section>
        <Section>
          <div className="social-component-content">
            <div className="main-content socials-main">
              <SocialLinks />
            </div>
          </div>
        </Section>

        <Section className="component-section">
          <div className="tokeno-content">
            <div className="main-content">
              <Tokeno />
            </div>
          </div>
        </Section>

        <Section className="component-section">
          <div className="roadmap-content">
            <div className="main-content roadmap-main">
              <RoadMap />
            </div>
          </div>
        </Section>
        <Section className="component-section">
          <div className="tires-content">
            <div className="main-content partners-main">
              <Partners />
            </div>
          </div>
        </Section>
        <Section className="component-section">
          <div className="tires-content">
            <div className="main-content secondRoadmap-main">
              <RoadmapSecond />
            </div>
          </div>
        </Section>
        <Section className="component-section">
          <div className="tires-content">
            <div className="main-content stacking-leadboard-main">
              <StackingLeadboard />
            </div>
          </div>
        </Section>
        <Section>
          <AboutFooter />
        </Section>
      </SectionsContainer>
    </div>
  );
}
