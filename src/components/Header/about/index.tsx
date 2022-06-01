import React from "react";
import { Button, useToast } from "@chakra-ui/react";
import pic from "../../svg/Sweet_Dragon.gif";
import Dragon from "../../../svg/dragon-1.png";
import TikTokLogo from "../../../svg/TikTokLogo";
import YoutubeLogo from "../../../svg/YoutubeLogo";
import InstagramLogo from "../../../icons/instagram-about.png";
import FacebookLogo from "../../../svg/FacebookLogo";
import TwitterLogo from "../../../svg/TwitterLogo";
import Telegram from "../../../svg/Telegram";
import Instagram from "../../../svg/instagram.png";
// import Tiktok from "../../../svg/tiktok.png";
interface Iprops {
  connectWallet: (boll: boolean) => void;
}
const About = ({ connectWallet }: Iprops) => {
  let account = localStorage.getItem("walletconnectedaddress");

  return (
    <>
      <div className="content-container " style={{ minHeight: "50vh" }}>
        <div className="columns">
          <h1 className="about-header">
            Sweetpad is fundraising and trading platform on <br /> Binance Smart
            Chain
          </h1>
          <p className="about-text">
            SWEETPAD is a platform for investing in the best projects of the
            market in such spheres as gamefi, defi, metaversen and other. All
            projects are carefully checked before lounching on sweetpad. You
            will be able to invest in different projects safely and profitably.
          </p>
          <div className="social-icons-header">
            <a href="https://t.me/sweetpadofficial" target={"_blank"}>
              <Telegram />
            </a>
            <a href="https://twitter.com/SweetPad_" target={"_blank"}>
              <TwitterLogo />
            </a>
            <a
              href="https://instagram.com/sweetpad.io?utm_medium=copy_link"
              target={"_blank"}
            >
              <FacebookLogo />
            </a>
            <a
              href="https://www.facebook.com/SweetPad-official-111890581352736"
              target={"_blank"}
            >
              <img src={Instagram} className="hide-hover" />
              <img src={InstagramLogo} className="show-hover" />
            </a>
            <a
              href="https://youtube.com/channel/UCVlg4Abe1XIWbXYyD6aMixA"
              target={"_blank"}
            >
              <YoutubeLogo />
            </a>
            <a href="https://vm.tiktok.com/ZSeahCPgn/" target={"_blank"}>
              <TikTokLogo />
            </a>
          </div>
        </div>
        {/* <div className="columns">
        <div className="cust-container">
          <img src={pic} alt="Avatar" style={{ width: "400px", zIndex: 10 }} />
        </div>
      </div> */}
        <div className="stack-card">
          <h3 className="title-stack">
            SWT distribution will be on 28/06/2022
          </h3>
          <div className="stack-values">
            <div>
              <span>TOTAL VALUE STAKING</span>
              <strong>$50 , 000 , 000</strong>
            </div>
            <div>
              <span>UNIQUE STAKERS</span>
              <strong>20 , 000</strong>
            </div>
            <div>
              <span>SWT STAKED</span>
              <strong>50 , 000 , 000 SWT</strong>
            </div>
            <div>
              <span>SWT -LP STAKED</span>
              <strong>5 , 000 , 000</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="drag-header">
        <img src={Dragon} alt="dragon" />
      </div>
    </>
  );
};
export default About;
