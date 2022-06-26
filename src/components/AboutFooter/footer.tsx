import React, { MouseEvent, useEffect, useState } from "react";
import Reddit from "../../svg/reddit.svg";
import Discord from "../../svg/discord.svg";
import Medium from "../../svg/Medium.svg";
import Tiktok from "../../svg/tiktok.svg";
// import InstagramEffect from "../../svg/Instagram-Logo-effect.svg";

import { useToast } from "@chakra-ui/react";
import { WalletStatus } from "../../types/types";
import Telegram from "../../svg/Telegram";
import TwitterLogo from "../../svg/TwitterLogo";
import DiscordLogo from "../../svg/DiscordLogo";
import RedditLogo from "../../svg/RedditLogo";
import MediumLogo from "../../svg/MediumLogo";
import TikTokLogo from "../../svg/TikTokLogo";
import YoutubeLogo from "../../svg/YoutubeLogo";
import FacebookLogo from "../../svg/FacebookLogo";

import Logo from "../../svg/Logo";
import InstagramLogo from "../../svg/InstagramLogo";

const Footer = () => {
  const [countPopUp, setCountPopUp] = useState(false);

  const toast = useToast();

  function openPopUp(event: MouseEvent) {
    event.preventDefault();

    if (countPopUp) {
      return false;
    }

    toast({
      status: WalletStatus.success,
      duration: 3000,
      isClosable: true,
      render: () =>
        !countPopUp ? <div className={"coming-soon"}>Coming Soon</div> : null,
    });

    setCountPopUp(true);

    setTimeout(() => setCountPopUp(false), 3000);
  }

  function openPopUpCoin(event: MouseEvent) {
    event.preventDefault();

    if (countPopUp) {
      return false;
    }

    toast({
      status: WalletStatus.success,
      duration: 3000,
      isClosable: true,
      render: () =>
        !countPopUp ? (
          <div className={"coming-soon"}>
            {" "}
            Proof Evidence - Untracked Listing
          </div>
        ) : null,
    });

    setCountPopUp(true);

    setTimeout(() => setCountPopUp(false), 3000);
  }

  return (
    <div className={"footer"}>
      <div className=" main-content">
        <section>
          <div className={"img-block-top"}>
            <Logo />
          </div>

          <div className={"footer-parent-section"}>
            <nav className="footer-nav">
              <ul>
                <strong>About</strong>

                <li>
                  <a href="/SweetPadWhitepaper.pdf" target={"_blank"}>
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    target={"_blank"}
                    href="https://bscscan.com/address/0xE8EbCf4Fd1faa9B77c0ec0B26e7Cc32a251Cd799"
                  >
                    Token contract
                  </a>
                </li>
                <li>
                  <a
                    href="https://coinmarketcap.com/currencies/sweetpad/"
                    target={"_blank"}
                  >
                    Coinmarketcap
                  </a>
                </li>
              </ul>
              <ul>
                <strong>Help</strong>
                {/* 
                <li>
                  <a href="/" onClick={openPopUp}>
                    Terms and Conditions
                  </a>
                </li> */}
                <li>
                  <a href="https://t.me/sweetpadofficial" target={"_blank"}>
                    Support
                  </a>
                </li>
                <li>
                  <a href="/" target={"_blank"} onClick={openPopUp}>
                    {/* Privacy Policy */}
                    Guides
                  </a>
                </li>
              </ul>
              <ul>
                <strong>Developers</strong>

                <li>
                  <a
                    href="/https://sweetpad-1.gitbook.io/sweetpad-guides-and-faq/"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="/" onClick={openPopUp}>
                    Audits
                  </a>
                </li>
              </ul>
            </nav>
            {/* <nav className="footer-nav"></nav> */}
          </div>
          <div className="link-sections">
            <nav className="footer-link">
              <ul className="social-icons">
                <nav>
                  <li className="first">
                    <a href={"https://t.me/sweetpadofficial"} target={"_blank"}>
                      <Telegram />
                    </a>
                  </li>
                  <li>
                    <a href={"https://twitter.com/SweetPad_"} target={"_blank"}>
                      <TwitterLogo />
                    </a>
                  </li>

                  <li>
                    <a href={"https://discord.gg/T3R4MECCAG"} target={"_blank"}>
                      <DiscordLogo />
                    </a>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      href={"https://www.reddit.com/r/SweetPad_Official/"}
                      target={"_blank"}
                      style={{ marginTop: " 5px", padding: "3px" }}
                    >
                      <span className="reddit">
                        <RedditLogo />
                      </span>
                    </a>
                  </li>
                </nav>
                <nav className="second-nav-social">
                  {/* <li>
                    <a
                      href={"https://medium.com/@sweetpad.io.official"}
                      target={"_blank"}
                    >
                      <MediumLogo />
                    </a>
                  </li> */}
                  <li>
                    <a
                      href={"https://vm.tiktok.com/ZSeahCPgn/"}
                      target={"_blank"}
                    >
                      <TikTokLogo />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://youtube.com/channel/UCVlg4Abe1XIWbXYyD6aMixA"
                      }
                      target={"_blank"}
                    >
                      <YoutubeLogo />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://www.facebook.com/SweetPad-official-111890581352736"
                      }
                      target={"_blank"}
                    >
                      <FacebookLogo />
                    </a>
                  </li>
                  <li>
                    <a
                      href={
                        "https://instagram.com/sweetpad.io?utm_medium=copy_link"
                      }
                      target={"_blank"}
                    >
                      {/* <img src={InstagramEffect}  /> */}
                      <InstagramLogo />
                    </a>
                  </li>
                </nav>
              </ul>
            </nav>
          </div>
          <div className="line-footer">
            <div className="line-chart"></div>

            <p className={"copyright"}>
              Copyright © 2022 | All rights reserved
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Footer;
