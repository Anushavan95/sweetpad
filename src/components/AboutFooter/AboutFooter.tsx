import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import Play from "../../svg/Play.svg";
import Footer from "./footer";

export default function AboutFooter() {
  const [show, setShow] = useState(false);

  return (
    <>
      <section>
        <div className="main-content">
          <div className="youtube-about-video">
            <>
              <div className="about-video-youtube">
                <div className="pool-title">
                  <Button>About us</Button>
                </div>
                <div className="videos-iframe">
                  {show ? (
                    <>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/js_Dx2MIbNI"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                      {/* <a
                    className="link-to-sweet-channel"
                    href="https://www.youtube.com/channel/UCVlg4Abe1XIWbXYyD6aMixA"
                    target={"_blank"}
                  >
                    Sweetpad Youtube
                  </a> */}
                    </>
                  ) : (
                    <span onClick={() => setShow(true)}>
                      <img src={Play} alt="Play" />
                    </span>
                  )}
                  <a
                    href="https://www.youtube.com/channel/UCVlg4Abe1XIWbXYyD6aMixA"
                    target={"_blank"}
                    className="youtube-link"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
