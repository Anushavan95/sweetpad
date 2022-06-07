// // import { Button } from "@chakra-ui/react";
// // import { useEffect, useState } from "react";

// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";
// // const responsive = {
// //   desktop: {
// //     breakpoint: { max: 3000, min: 1024 },
// //     items: 4,
// //     slidesToSlide: 1, // optional, default to 1.
// //   },
// //   tablet: {
// //     breakpoint: { max: 1024, min: 464 },
// //     items: 2,
// //     slidesToSlide: 2, // optional, default to 1.
// //   },
// //   mobile: {
// //     breakpoint: { max: 464, min: 320 },
// //     items: 1,
// //     slidesToSlide: 1, // optional, default to 1.
// //   },
// // };
// // const responsive = {
// //   desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
// //   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
// //   tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
// // };
// const RoadMap = () => {
//   const [deviceType, setdevicetype] = useState("desktop");
//   return (
//     <div className="roadMap_container" id="road">
//       <h5 className="roadMap-header" id="roadMap">
//
//       </h5>

//       <section className="quarter-section">
//         {/* <Carousel
//           responsive={responsive}
//           additionalTransfrom={0}
//           arrows
//           // autoPlaySpeed={3000}
//           centerMode={true}
//           className=""
//           dotListClass=""
//           draggable
//           focusOnSelect={false}
//           infinite
//           itemClass=""
//           keyBoardControl
//           // minimumTouchDrag={80}
//           renderButtonGroupOutside={false}
//           renderDotsOutside={false}
//           showDots
//           sliderClass=""
//           slidesToSlide={1}
//           swipeable
//           // customDot={<CustomDot />}
//           // customRightArrow={<CustomRight />}
//           // customLeftArrow={<CustomLeft />}
//         > */}

//         {/* </Carousel> */}
//       </section>
//     </div>
//   );
// };

// export default RoadMap;

import { Button } from "@chakra-ui/react";
import React, { Component } from "react";
// import OwlCarousel from 'react-owl-carousel';
import Carousel from "react-multi-carousel";

// import { Swiper, SwiperSlide } from "swiper/react";
import "react-multi-carousel/lib/styles.css";

import Done from "../../../svg/Done";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// var Carousel = require('react-responsive-carousel').Carousel;
class Carousels extends Component {
  state = {
    activeSilde: 0,
  };

  handleSlideSelect = () => {};

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
      mobile: { breakpoint: { max: 768, min: 320 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    };

    // const CustomDot = ({ onMove, index, onClick, active }) => {
    //   // onMove means if dragging or swiping in progress.
    //   // active is provided by this lib for checking if the item is active or not.
    //   return (
    //     <li
    //       className={active ? "active" : "inactive"}
    //       onClick={() => onClick()}
    //     >
    //       {index + 1}
    //     </li>
    //   );
    // };

    const arrowStyle = {
      background: "transparent",
      border: 0,
      color: "#fff",
      fontSize: "80px",
    };
    // const CustomRight = ({ onClick }) => (
    //   <button className="arrow right" onClick={onClick} style={arrowStyle}>
    //     <button style={{ fontSize: "50px" }}>right </button>
    //   </button>
    // );
    // const CustomLeft = ({ onClick }) => (
    //   <button className="arrow left" onClick={onClick} style={arrowStyle}>
    //     <button style={{ fontSize: "50px" }}>left </button>
    //   </button>
    // );
    //Also please improve the dot problem
    // Here we used number to just know click event buthelp us with ui too

    return (
      // <!-- Main Carousel Section Start -->
      <>
        <div className="pool-title">
          <Button>Roadmap</Button>
        </div>
        <div id="main-slide" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              arrows={false}
              centerMode={false}
              className=""
              // dotListClass="custom-dot-list-style"
              // draggable
              focusOnSelect={false}
              infinite
              autoPlay={false}
              itemClass=""
              ssr={true}
              keyBoardControl={true}
              // minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              showDots
              sliderClass=""
              // slidesToSlide={1}
              // swipeable
              // customDot={<CustomDot />}
              // customRightArrow={<CustomRight />}
              // customLeftArrow={<CustomLeft />}
            >
              {/* <div className="carousel-item active"> */}
              <div className="quarters-item">
                <div className="quarters-item-child">
                  <div className="title-quarter">
                    {/* <h3>Quarter 1</h3> */}
                  </div>
                  <ul>
                    <li>
                      Seed Phase
                      <label className="done-label">
                        <Done />
                      </label>
                    </li>
                    <li>
                      100,000 Community
                      <label className="done-label">
                        <Done />
                      </label>
                    </li>

                    <li>
                      Whitepaper
                      <label className="done-label">
                        <Done />
                      </label>
                    </li>
                    <li>
                      CoinMarketCap <br />
                      ICO listing
                      <label className="done-label">
                        <Done />
                      </label>
                    </li>
                    <li>
                      NFT Airdrop
                      <label className="done-label">
                        <Done />
                      </label>
                    </li>

                    <li> Community</li>
                  </ul>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="carousel-item active "> */}
              <div className="quarters-item">
                <div className="quarters-item-child">
                  <div className="title-quarter">
                    {/* <h3>Quarter 2</h3> */}
                  </div>
                  <ul>
                    <li>SWT coin Airdrop</li>
                    <li>Public Sale</li>
                    <li>Platform Launch </li>
                    <li>Staking Launch</li>
                    <li>Partnerships</li>
                    <li>NFT Release</li>
                    <li>NFT Marketplace </li>
                    <li>
                      Listing on Different <br></br>
                      Exchanges
                    </li>
                    <li>CoinGecko Listing</li>
                    <li className="querater-item-last-child">
                      Influencer Marketing Push
                    </li>
                    {/* <li>100,000 Community</li> */}
                  </ul>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="carousel-item active"> */}
              <div className="quarters-item">
                <div className="quarters-item-child">
                  <div className="title-quarter">
                    {/* <h3>Quarter 3</h3> */}
                  </div>
                  <ul>
                    <li>Exchanger Launch</li>
                    <li> Pools Opening</li>
                    <li> 150,000 Community</li>
                    <li> 5,000 Holders</li>
                    <li> NFT Game</li>
                    <li>Pools Openning</li>
                  </ul>
                </div>
              </div>
              {/* </div> */}
              {/* <div className="carousel-item active"> */}
              <div className="quarters-item">
                <div className="quarters-item-child">
                  <div className="title-quarter">
                    {/* <h3>Quarter 4</h3> */}
                  </div>
                  <ul>
                    <li>Start Sweet Game</li>
                    <li> Start Sweet Metaverse</li>
                    <li>200,000 Community</li>
                    <li>10,000 Holders</li>
                  </ul>
                </div>
              </div>
              {/* </div> */}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default Carousels;
