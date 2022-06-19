import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import { AbiItem } from "web3-utils";
// @ts-ignore
import BustSvg from "../../svg/bust.svg";
import SweetLogo from "../../svg/sweet-step.svg";
import { ethers } from "ethers";
import SimpleStorage_abi from "../../utils/ABI/sweet-token.json";
import BusdToken from "../../utils/ABI/busd-token.json";
import PresaleTokken from "../../utils/ABI/presale-token.json";
import SweetTokkenTest_abi from "../../utils/ABI/sweet-tokken-test.json";
import SweetFreezingTest_abi from "../../utils/ABI/sweet-freezing-test.json";

import DayDown from "./DayDown";
import {
  sweetAddress,
  busdAddress,
  presaleAddress,
  sweetFreezing,
} from "../../utils/contractaddresses";
import React, { useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import { useDispatch } from "react-redux";

interface Iprops {
  userAccount: any;
  connectOpen: boolean;
  handleOpenModal: () => void;
  onConnect?: () => void;
  address?: String;
  webModal?: any;
  provider?: any;
  connected?: boolean;
  chainId?: number;
}
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    [name: string]: any;
  }
}

function BuySweet({ onConnect, provider }: Iprops) {
  let localAddress: any = localStorage.getItem("walletconnectedaddress");
  const dispatch = useDispatch();
  const [first, setfirst] = useState(false);
  const loading = useRef(false);
  const [stateMax, setStateMax] = useState("");
  const [localAddressState, setLocalAddress] = useState("");
  const [color, _] = useState("#ffffff");
  let maxApprove: any = null;
  let sweetContract: any;
  let busdContract: any;
  let presaleContract: any;

  let SweetTokkenTest: any;

  const { isOpen, onOpen, onClose, isControlled } = useDisclosure();
  const [date, setDate] = useState<any>(null);

  const [approved, setAprooved] = useState<any>(false);
  const [disableClaim, setClaimDisable] = useState<boolean>(true);
  const [disableApprove, setDisabeleAproove] = useState<boolean>(true);
  const [openClaim, setClaim] = useState<any>(false);
  const [balance, setBalance] = useState<any>(null);

  const [deadline, setDeadline] = useState("Juny 27, 2022");

  const [contract, setContract] = useState<any>(null);
  const [bust, setBust] = useState<any>("");
  const [sweet, setSweet] = useState<any>("");
  const { isConnectButtonClick, clickedBuySweet, busdCoin, sweetCoin } =
    useTypedSelector((state) => state.socials);

  useEffect(() => {
    if (isConnectButtonClick) {
      if (onConnect) {
        onConnect();
      }
      if (clickedBuySweet) {
        maxCoins();
      }
    }
  }, [isConnectButtonClick, clickedBuySweet]);

  useEffect(() => {
    dispatch(SocialActionCreators.setProvider(provider));

    if (provider) {
      let accounts = provider.eth.getAccounts();
      setLocalAddress(accounts[0]);
    }
    const bustData = async () => {
      let freezingSweet = await new provider.eth.Contract(
        SweetFreezingTest_abi as AbiItem[],
        sweetFreezing
      );
      let accounts = await provider.eth.getAccounts();
      console.log(freezingSweet, 545454545);
      let getFreezes = await freezingSweet.methods
        .getFreezes(accounts[0])
        .call();

      dispatch(SocialActionCreators.setFreezesBlock(getFreezes));
      busdContract = await new provider.eth.Contract(
        BusdToken as AbiItem[],
        busdAddress
      );
      maxApprove = provider.utils.toWei(
        await busdContract.methods
          .allowance(JSON.parse(localAddressState), presaleAddress)
          .call()
      );
      setStateMax(maxApprove);
    };

    bustData();
  }, [onConnect]);
  const onDeleteModal = () => {
    loading.current = false;
    setfirst(false);
  };
  useEffect(() => {
    const connectWalletHandler = async () => {
      busdContract = new provider.eth.Contract(
        BusdToken as AbiItem[],
        busdAddress
      );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      sweetContract = new provider.eth.Contract(
        SweetTokkenTest_abi as AbiItem[],
        sweetAddress
      );

      presaleContract = new provider.eth.Contract(
        PresaleTokken as AbiItem[],
        presaleAddress
      );

      let accounts = await provider.eth.getAccounts();

      setContract((tempContract: any) => {
        return tempContract;
      });

      let some = await busdContract.methods.balanceOf(accounts[0]).call();
      dispatch(
        SocialActionCreators.setBusdBalance(
          Number(provider.utils.fromWei(some))
        )
      );

      let result = await presaleContract.methods.info(accounts[0]).call();

      dispatch(
        SocialActionCreators.setSweetBalance(
          Number(provider.utils.fromWei(result))
        )
      );

      if (sweetCoin > 0) {
        setClaim(true);
      }
    };
    provider && connectWalletHandler();
  }, [onOpen, sweetContract, localAddressState, bust, openClaim]);

  const approveClick = async () => {
    setAprooved(false);
    // @ts-ignore
    maxApprove = ethers.constants.MaxUint256;
    busdContract = new provider.eth.Contract(
      BusdToken as AbiItem[],
      busdAddress
    );

    let accounts = await provider.eth.getAccounts();
    // sweetcontract
    await busdContract.methods.approve(presaleAddress, maxApprove).send({
      from: accounts[0],
    });
    balance && setAprooved(true);
  };

  const buySweet = async () => {
    setfirst(true);
    loading.current = true;

    presaleContract = new provider.eth.Contract(
      PresaleTokken as AbiItem[],
      presaleAddress
    );
    let accounts = await provider.eth.getAccounts();
    let result = await presaleContract.methods.info(accounts[0]).call();

    await presaleContract.methods.buy(provider.utils.toWei(String(bust))).send({
      from: accounts[0],
    });

    dispatch(
      SocialActionCreators.setSweetBalance(
        Number(provider.utils.fromWei(result)) + Number(sweet)
      )
    );
  };

  const maxCoins = async () => {
    setBust(busdCoin);

    onOpen();

    setLocalAddress(localAddress);

    busdContract = new provider.eth.Contract(
      BusdToken as AbiItem[],
      busdAddress
    );
    maxApprove = provider.utils.toWei(
      await busdContract.methods
        .allowance(JSON.parse(localAddressState), presaleAddress)
        .call()
    );
    setStateMax(maxApprove);
    if (bust !== "") {
      setDisabeleAproove(false);
    } else if (bust === "") {
      setDisabeleAproove(true);
    }
  };
  function calcSweet() {
    setBust(Number(sweet) / 4);
  }
  function calculateBust(event: { target: HTMLInputElement }) {
    setBust(event.target.value);
  }
  function calculateSweet(event: { target: HTMLInputElement }) {
    setSweet(event.target.value);
  }

  useEffect(() => {
    calcBust();
    if (bust !== "") {
      setDisabeleAproove(false);
    } else if (bust === "") {
      setDisabeleAproove(true);
    }
  }, [bust]);
  useEffect(() => {
    calcSweet();
  }, [sweet]);
  function calcBust() {
    setSweet(Number(bust) * 4);
  }
  useEffect(() => {
    setDate(new Date());
    if (sweet == 0) {
      setSweet("");
      setBust("");
    }
    if (bust == 0) {
      setSweet("");
      setBust("");
    }
    if (deadline === date) {
      setClaimDisable(false);
    }
  }, []);

  useEffect(() => {
    if (sweetCoin > 0) {
      setClaim(true);
    }
  }, [sweetCoin]);

  function claimedToCash() {
    ("claimedToCash");
  }

  useEffect(() => {
    setLocalAddress(localAddress);
  }, [localAddress]);

  useEffect(() => {
    loading.current = false;

    if (!loading.current) {
      setfirst(false);
    }
  }, [sweetCoin]);

  useEffect(() => {
    dispatch(SocialActionCreators.setAccountLocal(localAddressState));
  }, [localAddressState]);

  return (
    <Box className="buy-sweet-open">
      <a
        target={"_blank"}
        href="https://docs.google.com/forms/d/e/1FAIpQLSeN_kWm2SLO842TtFXVux1ZnXzOeO50uLgl7mLm25UalvLvMA/viewform"
      >
        <Button className="button-ido">Apply for IDO</Button>
      </a>
      <div className="buttons-connected">
        {localAddress || localAddressState ? (
          <Button className="buy-sweet-btn" onClick={maxCoins}>
            Buy Sweets
          </Button>
        ) : (
          <Button className="buy-sweet-btn" onClick={onConnect}>
            Buy Sweets
          </Button>
        )}
      </div>

      {localAddressState && localAddressState ? (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Box className="header-buy-sweet">
              <ModalHeader className="buy-header">Buy Sweets</ModalHeader>
              <ModalCloseButton style={{ zIndex: 2 }} onClick={onDeleteModal} />
            </Box>

            <ModalBody>
              <Box className="balances-block">
                <Box className="bust-block">
                  <img src={BustSvg} alt={"Bust"} />
                  <Text>BUSD</Text>
                </Box>
                <Text>Balance: {busdCoin}</Text>
              </Box>
              <Box className="max-input-counter">
                <Input
                  placeholder="0.25"
                  value={bust || ""}
                  onChange={calculateBust}
                  type="number"
                />
                <Button className="max-btn-sweet" onClick={maxCoins}>
                  Max
                </Button>
              </Box>
              <Box className="balances-block">
                <Box className="bust-block">
                  <img
                    className="swt-balance-logo"
                    src={SweetLogo}
                    alt={"SweetLogo"}
                  />
                  <Text>Sweet</Text>
                </Box>

                <Text>Balance: {sweetCoin}</Text>
              </Box>
              <Box>
                <Input
                  placeholder="1"
                  value={sweet || ""}
                  onChange={calculateSweet}
                  type="number"
                />
              </Box>
              <Box className="price-block">
                <Text>Price:</Text>

                <Text>0.25BUSD per Sweet</Text>
              </Box>
            </ModalBody>

            <ModalFooter className="buy-btn-footer">
              {Number(stateMax) <= 0 ? (
                <Button onClick={approveClick} className="approve">
                  Approve
                </Button>
              ) : (
                <Button className={`buy-sweet-btn-footer `} onClick={buySweet}>
                  Buy
                </Button>
              )}

              <span className="liner-modal"></span>
            </ModalFooter>

            {openClaim ? (
              <div className="countdown" style={{ marginTop: "20px" }}>
                <div className="time-and-coin">
                  {loading.current || first ? (
                    <div className="spinner-loader">
                      <ClipLoader color={color} size={70} />
                    </div>
                  ) : (
                    <p>{sweetCoin} sweet </p>
                  )}

                  <div>
                    <DayDown deadline={deadline} />
                  </div>
                </div>
                <Button
                  className="claim"
                  onClick={claimedToCash}
                  disabled={disableClaim}
                >
                  Claim
                </Button>
              </div>
            ) : null}
          </ModalContent>
        </Modal>
      ) : null}
    </Box>
  );
}

export default React.memo(BuySweet);
