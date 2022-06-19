import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutFooter from "../../components/AboutFooter/AboutFooter";
import BuyDragonVideo from "../../components/BuyDragonVideo";
import FinishedDragon from "../../components/FinishedDragon";
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
import Tires from "../../components/tires";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import drag from "../../svg/dragon-social.png";
import DragonTokeno from "../../svg/dragon-tokeno.png";
// import useScrollSnap from "react-use-scroll-snap";
// const responsive = {
//   desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
//   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
//   tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
// };

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  console.log(isPortrait, "isPortrait");

  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  console.log(isBigScreen, "isBigScreen");

  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  // container = React.createRef();
  // const container = React.useRef<HTMLDivElement | undefined>();

  // const bindScrollSnap = () => {
  //   const element = container.current!;
  //   createScrollSnap(
  //     element,
  //     {
  //       snapDestinationY: "90%",
  //     },
  //     () => console.log("snapped")
  //   );
  // };

  // useEffect(() => {
  //   bindScrollSnap();
  // }, []);
  const dispatch = useDispatch();

  const connectWallet = (bool: boolean) => {
    dispatch(SocialActionCreators.setIsConnectButtonClicked(bool));
  };
  let options = {
    delay: 400,

    // activeClass:          'active', // the class that is appended to the sections links
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
    touchSensitivity: 150,
    sectionClassName: "section",
    anchors: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,

    // sectionPaddingTop: "50px",
    // sectionPaddingBottom: "50px",
    responsive: true,
    arrowNavigation: true,
  };

  return (
    // <div>
    //   <Headera connectWallet={(bool: boolean) => connectWallet(bool)} />
    //   <div className="support-scrollsnap"></div>
    //   <VideoComponent />
    //   <div className="scroll-container">
    //     <div className="scroll-area">
    //       <div className="main-content" style={{ paddingTop: "60px" }}>
    //         <About connectWallet={connectWallet} />
    //       </div>
    //     </div>
    //     <div className="scroll-area">
    //       1
    //       {/* <div className="live-pools-conetnt">
    //         <div className="main-content live-pool">
    //           <LivePools />
    //         </div>
    //       </div> */}
    //     </div>
    //     <div className="scroll-area">
    //       <div className="live-feautured-conetnt">
    //         <div className="main-content feautured-pool">
    //           <FeaturedPools />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="scroll-area">
    //       {" "}
    //       <Tires />
    //     </div>
    //   </div>
    // </div>
    // <div>
    <div>
      <div className="support-scrollsnap"></div>
      <Headera connectWallet={(bool: boolean) => connectWallet(bool)} />
      <section className="scroll-container-sweet">
        <section className="component-section scroll-area">
          <div className="main-content" style={{ paddingTop: "60px" }}>
            <About connectWallet={connectWallet} />
          </div>
        </section>
        <section className="component-section scroll-area">
          <div className="live-pools-conetnt">
            <div className="main-content live-pool">
              <LivePools />
            </div>
          </div>
          <BuyDragonVideo />
        </section>
        <section className="component-section scroll-area">
          <div className="live-feautured-conetnt">
            <div className="main-content feautured-pool">
              <FeaturedPools />
            </div>
          </div>
          <FinishedDragon />
        </section>
        {isTabletOrMobile ? (
          <>
            <section className="component-section  scroll-area">
              <div className="tires-content">
                <div className="main-content partners-main">
                  <Tires
                    isTabletOrMobile={isTabletOrMobile}
                    method={"calculator"}
                  />
                </div>
              </div>
            </section>
            <section className="component-section  scroll-area">
              <div className="tires-content">
                <div className="main-content partners-main">
                  <Tires
                    isTabletOrMobile={isTabletOrMobile}
                    method={"slider"}
                  />
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="component-section  scroll-area">
            <div className="tires-content">
              <div className="main-content partners-main">
                <Tires />
              </div>
            </div>
          </section>
        )}

        <section className="social-airdrops  scroll-area">
          <div className="social-component-content">
            <div className="main-content socials-main">
              <SocialLinks />
            </div>
          </div>
          <LazyLoadImage
            src={drag}
            alt="Dragon-social"
            className="drag-social"
          />
        </section>
        <section className="component-section tokeno-drag-content  scroll-area">
          <div className="tokeno-content">
            <div className="main-content">
              <Tokeno />
            </div>
          </div>
          <div className="tokeno-dragon">
            <img
              src={DragonTokeno}
              alt="DragonTokeno"
              // effect="blur"
              className="drag-tokeno-img"
            />
          </div>
        </section>
        <section className="component-section  scroll-area">
          <div className="roadmap-content">
            <div className="main-content roadmap-main">
              <RoadMap />
            </div>
          </div>
        </section>
        <section className="component-section  scroll-area">
          <div className="tires-content">
            <div className="main-content partners-main">
              <Partners />
            </div>
          </div>
        </section>
        <section className="component-section  scroll-area">
          <div className="tires-content">
            <div className="main-content secondRoadmap-main">
              <RoadmapSecond />
            </div>
          </div>
        </section>
        <section className="component-section  scroll-area">
          <div className="tires-content">
            <div className="main-content stacking-leadboard-main">
              <StackingLeadboard />
            </div>
          </div>
        </section>
        <section className="component-section scroll-area">
          <AboutFooter />
        </section>
      </section>
    </div>
  );
}
