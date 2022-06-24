import { Box, Button } from "@chakra-ui/react";
import StakeImage from "../../svg/stake.png";
import StakeNFT from "../../svg/nft-logo.png";

import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import CopyIcon from "../../svg/copy.png";
import BustSvg from "../../svg/bust.svg";
import SweetLogo from "../../svg/sweet-step.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classes from "./Drawer.module.scss";
import { changeAnchor } from "./Web3Modal/helpers/drawwer-chanje";
import {
  sweetFreezing,
  sweetNftAddres,
  sweetNftSFreezing,
} from "../../utils/contractaddresses";
import SweetFreezingTest_abi from "../../utils/ABI/sweet-freezing-test.json";
import SweetNftFreezingAbi from "../../utils/ABI/nft-freezing-test.json";
import SweetNftAbi from "../../utils/ABI/sweetNFT-test.json";
import { AbiItem } from "web3-utils";
import ClipLoader from "react-spinners/ClipLoader";
import ModalClaimAccount from "./ModalClaimAccount";

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
  const [bnb, setBnb] = useState(null);
  const {
    userNfts,
    currentBlock,
    freezesBlock,
    provider,
    accountLocal,
    busdCoin,
    sweetCoin,
    freezesNftID,
    freezesNft,
  } = useTypedSelector((state) => state.socials);
  // console.log(freezesNftID, "freezesNftIDfreezesNftIDfreezesNftID");
  const [freezeSwtInput, setfreezeSwtInput] = useState<string>("");

  const [sweetCount, setSweetCount] = useState<any>([]);
  const [currentBlockState, setCurrentBlock] = useState<any>(null);
  const [nftIdFrezes, setnftIdFrezes] = useState([]);
  const dispatch = useDispatch();
  console.log(freezesNft, "freezesNft___________________");

  let locale: any = localStorage.getItem("walletconnectedaddress");
  useEffect(() => {
    if (localStorage.getItem("walletconnectedaddress")) {
      dispatch(SocialActionCreators.setAccountLocal(locale));
    }
    const data = async () => {
      let freezesUntill = freezesBlock.map((item: any) => {
        return { until: item.frozenUntil, count: item[2], period: item.period };
      });

      setSweetCount(freezesUntill);
    };
    const getCurrentBlockData = async () => {
      let accounts = await provider.eth.getAccounts();
      let balance = await provider.eth.getBalance(accounts[0]);
      setBnb(provider.utils.fromWei(balance));
      let currentBlock = await provider.eth.getBlockNumber();
      setCurrentBlock(currentBlock);
    };

    getCurrentBlockData();
    data();
  }, [freezesBlock]);

  const handleSwtClaimChange = (event: { target: HTMLInputElement }) => {
    setfreezeSwtInput(event.target.value);
  };
  const unfreezeSwt = async (index: number) => {
    let freezingSweet = await new provider.eth.Contract(
      SweetFreezingTest_abi as AbiItem[],
      sweetFreezing
    );

    let accounts = await provider.eth.getAccounts();
    let b = await freezingSweet.methods
      .unfreezeSWT(index, provider.utils.toWei(freezeSwtInput))
      .send({
        from: accounts[0],
      });
  };

  // useEffect(() => {}, [freezesNftID]);

  // useEffect(() => {
  //   const data = async () => {
  //     let sweetNftFreeze = await new provider.eth.Contract(
  //       SweetNftFreezingAbi as AbiItem[],
  //       sweetNftSFreezing
  //     );
  //     let accounts = await provider.eth.getAccounts();

  //     let freezesNftId = await sweetNftFreeze.methods
  //       .getNftsFrozeByUser(accounts[0])
  //       .call();
  //     setnftIdFrezes(freezesNftId);
  //     console.log(freezesNftId, "_____freezesNftId_____");
  //     // freezesNftId.map(async (item) => {
  //     //   return await sweetNftFreeze.methods
  //     //     .nftData(item)
  //     //     .call()
  //     //     .then((res) => {
  //     //       dispatch(
  //     //         SocialActionCreators.setFreezesNft(
  //     //           JSON.parse(JSON.stringify(res))
  //     //         )
  //     //       );
  //     //     });
  //     // });
  //   };
  //   data();
  // }, [open]);

  const unfreezeNft = async (Nftid) => {
    let sweetNftFreeze = await new provider.eth.Contract(
      SweetNftFreezingAbi as AbiItem[],
      sweetNftSFreezing
    );

    let accounts = await provider.eth.getAccounts();
    let c = await sweetNftFreeze.methods.unfreeze(Nftid).send({
      from: accounts[0],
    });
    // console.log(c, "c");
    console.log(Nftid, "Nftid");
  };

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
            <Box className="coins-block">
              <div className="coins">
                <h3>Coins</h3>
                <div className="balance-draw-coin">
                  <div className="balance-draw">
                    <div className="b-1">
                      <img src={BustSvg} alt="BustSvg" /> <span>BNB:</span>
                    </div>

                    {bnb}
                  </div>
                  <div className="balance-draw">
                    <div className="b-2">
                      <img src={BustSvg} alt="BustSvg" /> <span>BUSD:</span>
                    </div>
                    {busdCoin}
                  </div>
                </div>
                <div className="balance-draw-coin">
                  <div className="balance-draw">
                    <div className="b-3">
                      <img src={SweetLogo} alt="SweetLogo" />
                      <span> SWT:</span>
                    </div>
                    {sweetCoin}
                  </div>
                </div>
              </div>
            </Box>

            <div className="sweet-freezes-block">
              <div className="frezes-count">
                <span>
                  <img
                    src={StakeImage}
                    alt="StakeImage"
                    className="stake-logo"
                  />
                  Stakes
                </span>
                <span> {freezesBlock.length}</span>
              </div>
              <div>
                {sweetCount?.map((item: any, index) => {
                  return (
                    <li className="frezes-list">
                      SWT:
                      <span> {provider.utils.fromWei(item.count)}</span>
                      <span>days {Number(item.period / 10)}</span>
                      {/* <Button
                      // 
                      // 
                      // disabled={item.until < currentBlockState ? false : true}
                      > */}
                      <ModalClaimAccount
                        freezeSwtInput={freezeSwtInput}
                        handleSwtClaimChange={handleSwtClaimChange}
                        unfreezeSwt={() => unfreezeSwt(index)}
                      />
                      {/* </Button> */}
                    </li>
                  );
                })}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                }}
              ></div>
            </div>

            <div className="nft-freezes-block">
              <div className="my-nft">
                <img src={StakeNFT} alt="StakeNFT" />
                <span> NFT:</span>
              </div>
              <span>Tickets: {freezesNft.length}</span>
              <div className="block-section-nft-and-swt">
                <div className="nft-info-section">
                  {freezesNft ? (
                    <>
                      {[...freezesNft]?.map((item: any) => {
                        let image = item.image.replace(
                          "ipfs://",
                          "https://ipfs.io/ipfs/"
                        );
                        return (
                          <div key={item.name}>
                            <h2>{item.name}</h2>
                            {/* <img src={`${image}`} /> */}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <span>You have not Nfts</span>
                    // <div className="spinner-nft">
                    //   <ClipLoader color={"#000000"} size={30} />
                    // </div>
                  )}
                </div>
                <div className="unfreeze-nft-section">
                  {freezesNft.map((item: any, index: number) => {
                    if (freezesNftID) {
                      item.id = freezesNftID[index];
                    }
                    return (
                      <div>
                        <Button
                          className="claim-nft"
                          disabled={
                            item.freezeEndBlock < currentBlockState
                              ? false
                              : true
                          }
                          onClick={() => unfreezeNft(item.id)}
                        >
                          claim
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
