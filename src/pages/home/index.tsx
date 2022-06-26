import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import AboutFooter from "../../components/AboutFooter/AboutFooter";
import About from "../../components/Header/about";
import Headera from "../../components/Header/misc/header";
import LivePools from "../../components/Main/LivePools/LivePools";
import Partners from "../../components/Main/partners/Partners";
import RoadMap from "../../components/Main/roadmap";
import RoadmapSecond from "../../components/Main/roadmap/RoadmapSecond";
import StackingLeadboard from "../../components/Main/Stacking/Stacking-Leadboard";
import Tokeno from "../../components/Main/Tokeno";
import MediaDragon from "../../svg/Media.png";
import SecondRoadmap from "../../svg/second-roadmap.png";
import RoadmapDragon from "../../svg/roadmap-dragon.png";
import StackingDragon from "../../svg/stacking.png";
import Tires from "../../components/tires";
import TokenoImage from "../../svg/tokenomix.png";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import BuyDragon from "../../svg/Buy.png";
import Footer from "../../components/AboutFooter/footer";
import YoutubeDragon from "../../svg/youtube.png";
export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const isPortrait = useMediaQuery({ query: "(max-width: 800px)" });

  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

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
    <div>
      <div className="support-scrollsnap"></div>
      <Headera connectWallet={(bool: boolean) => connectWallet(bool)} />
      <section className="scroll-container-sweet">
        <section className="component-section scroll-area">
          <div className="main-content">
            <About connectWallet={connectWallet} />
          </div>
        </section>
        <section className="component-section scroll-area">
          <div className="live-pools-conetnt">
            <div className="main-content live-pool">
              <LivePools />
            </div>
          </div>
          <div className="buy-drag">
            <LazyLoadImage src={BuyDragon} alt={BuyDragon} />
          </div>
        </section>
        {/* <section className="component-section scroll-area">
          <div className="live-feautured-conetnt">
            <div className="main-content feautured-pool">
              <FeaturedPools />
            </div>
          </div>
          <FinishedDragon />
        </section> */}
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

        {/* <section className="social-airdrops  scroll-area">
          <div className="social-component-content">
            <div className="main-content socials-main">
              <SocialLinks />
            </div>
          </div>

          <AirdropDragon />
        </section> */}
        <section className="component-section tokeno-drag-content  scroll-area">
          <div className="tokeno-content">
            <div className="main-content">
              <Tokeno />
            </div>
          </div>
          <div className="tokeno-dragon">
            <LazyLoadImage src={TokenoImage} />
          </div>
        </section>
        {isPortrait ? (
          <>
            <section className="component-section  scroll-area">
              <div className="roadmap-content">
                <div className="main-content roadmap-main">
                  <RoadMap method={"section-1"} isPortrait={isPortrait} />
                </div>
              </div>
              {/* <div className="roadmap-dragon">
                <LazyLoadImage src={RoadmapDragon} />
              </div> */}
            </section>
            <section className="component-section  scroll-area">
              <div className="roadmap-content">
                <div className="main-content roadmap-main">
                  <RoadMap method={"section-2"} isPortrait={isPortrait} />
                </div>
              </div>
              <div className="roadmap-dragon">
                <LazyLoadImage src={RoadmapDragon} />
              </div>
            </section>
          </>
        ) : (
          <section className="component-section  scroll-area">
            <div className="roadmap-content">
              <div className="main-content roadmap-main">
                <RoadMap />
              </div>
            </div>
            <div className="roadmap-dragon">
              <LazyLoadImage src={RoadmapDragon} />
            </div>
          </section>
        )}
        {isPortrait ? (
          <>
            <section className="component-section  scroll-area">
              <div className="tires-content">
                <div className="main-content partners-main">
                  <Partners method={"partner-1"} isPortrait={isPortrait} />
                </div>
              </div>
              <div className="partners-dragon">
                <LazyLoadImage src={MediaDragon} alt={"MediaDragon"} />
              </div>
            </section>

            <section className="component-section  scroll-area">
              <div className="tires-content">
                <div className="main-content partners-main">
                  <Partners method={"section-2"} isPortrait={isPortrait} />
                </div>
              </div>
              <div className="partners-dragon">
                <LazyLoadImage src={MediaDragon} alt={"MediaDragon"} />
              </div>
            </section>
          </>
        ) : (
          <section className="component-section  scroll-area">
            <div className="tires-content">
              <div className="main-content partners-main">
                <Partners />
              </div>
            </div>
            <div className="partners-dragon">
              <LazyLoadImage src={MediaDragon} alt={"MediaDragon"} />
            </div>
          </section>
        )}

        <section className="component-section  scroll-area">
          <div className="tires-content">
            <div className="main-content secondRoadmap-main">
              <RoadmapSecond />
            </div>
          </div>
          <div className="second-roadmap-dragon">
            <LazyLoadImage src={SecondRoadmap} />
          </div>
        </section>
        <section className="component-section  scroll-area">
          <div className="tires-content">
            <div className="main-content stacking-leadboard-main">
              <StackingLeadboard />
            </div>
          </div>
          <div className="stacking-dragon">
            <LazyLoadImage src={StackingDragon} />
          </div>
        </section>
        {isPortrait ? (
          <>
            {" "}
            <section className="component-section scroll-area">
              <AboutFooter isPortrait={isPortrait} method={"slice"} />
              <div className="about-dragon">
                <LazyLoadImage src={YoutubeDragon} />
              </div>
            </section>
            <section className="component-section scroll-area">
              <Footer />
            </section>
          </>
        ) : (
          <section className="component-section scroll-area">
            <AboutFooter />
            {/* <div className="about-dragon">
              <LazyLoadImage src={YoutubeDragon} />
            </div> */}
          </section>
        )}
      </section>
    </div>
  );
}
