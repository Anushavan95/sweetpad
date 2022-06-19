import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import CopyIcon from "../../svg/copy.png";
import BustSvg from "../../svg/bust.svg";
import SweetLogo from "../../svg/sweet-step.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./Drawer.module.scss";
import { changeAnchor } from "./Web3Modal/helpers/drawwer-chanje";

const Drawer = (props: any) => {
  const {
    drawer,
    animate,
    hidden,
    overlay,
    overlayOpen,
    overlayHidden,
    header,
  } = classes;
  const { open, anchor, onClose } = props;
  const [copied, setCopied] = useState(false);
  const { userNfts, currentBlock, freezesBlock, provider } = useTypedSelector(
    (state) => state.socials
  );
  console.log(userNfts, currentBlock, freezesBlock, " currentBlock usernfts");
  const [first, setfirst] = useState([]);
  const dispatch = useDispatch();
  const { accountLocal, busdCoin, sweetCoin } = useTypedSelector(
    (state) => state.socials
  );
  let c;
  let locale: any = localStorage.getItem("walletconnectedaddress");
  useEffect(() => {
    if (localStorage.getItem("walletconnectedaddress")) {
      dispatch(SocialActionCreators.setAccountLocal(locale));
    }
    const data = async () => {
      const freezes = freezesBlock.map((item) => {
        return item[2];
      });
      setfirst(freezes);
    };
    data();
  }, [open]);

  return (
    <Box>
      <div
        className={`${overlay} ${!open && overlayHidden} ${
          open && overlayOpen
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`drawwer-box  ${drawer} ${open && animate} ${
          !open && hidden
        } ${changeAnchor(anchor, classes)}`}
      >
        <div className={header}>
          <div className="account-drawwer">
            <h3>My Account</h3>
          </div>
        </div>
        <Box>
          <Box>
            <Box className="account-box">
              <h3>Account Address</h3>
              <div className="account-addres">
                <p id="text-container">
                  {accountLocal &&
                    `${accountLocal.slice(0, 6)}...${accountLocal.slice(
                      accountLocal.length - 4,
                      accountLocal.length
                    )}`}
                </p>
                <CopyToClipboard
                  text={accountLocal && accountLocal.replace(/["]+/g, "")}
                  onCopy={() => setCopied(true)}
                >
                  <button className="copy-icon-container">
                    <img src={CopyIcon} alt="CopyIcon" />
                  </button>
                </CopyToClipboard>
                {copied ? <span style={{ color: "red" }}>Copied.</span> : null}
              </div>
            </Box>
            <Box>
              <div className="coins">
                <h3>Coins</h3>
                <div className="balance-draw-coin">
                  <div className="balance-draw">
                    <img src={BustSvg} alt="BustSvg" /> <span> BNB:</span>
                    {busdCoin}
                  </div>
                </div>
                <div className="balance-draw-coin">
                  <div className="balance-draw">
                    <img src={SweetLogo} alt="SweetLogo" />
                    <span> SWT:</span> {sweetCoin}
                  </div>
                </div>
              </div>
            </Box>
            {userNfts.map((item) => {
              let image = item.image.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
              );
              return (
                <div style={{ width: "100px" }}>
                  <h2>{item.name}</h2>
                  <img src={image} />
                </div>
              );
            })}
            {first.map((item) => {
              return <li>{provider.utils.fromWei(item)}</li>;
            })}
          </Box>

          <Box>
            <Button variant="outline" mr={3} onClick={props.killSessionCall}>
              Disconnect
            </Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default Drawer;
