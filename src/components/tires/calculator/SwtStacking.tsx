import React, { useEffect, useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import ClipLoader from "react-spinners/ClipLoader";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { sweetAddress, sweetFreezing } from "../../../utils/contractaddresses";
import { AbiItem } from "web3-utils";
import SweetTokkenTest_abi from "../../../utils/ABI/sweet-tokken-test.json";
import SweetFreezingTest_abi from "../../../utils/ABI/sweet-freezing-test.json";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../../store/reducers/socials/action-creators";

declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    [name: string]: any;
  }
}

export default function SwtStacking({ sweetCoin, days }) {
  const dispatch = useDispatch();
  const { provider, currentBlock } = useTypedSelector((state) => state.socials);
  const [freezes, setFreezes] = useState(null);
  const loading = useRef(false);
  const [color, _] = useState("#ffffff");
  const [first, setfirst] = useState(false);

  const [maxAppprove, setMaxAppproved] = useState(0);
  const stakeApprove = async () => {
    loading.current = true;
    setfirst(true);
    let maxApprove: any = ethers.constants.MaxUint256;
    let sweetContract = await new provider.eth.Contract(
      SweetTokkenTest_abi as AbiItem[],
      sweetAddress
    );
    let accounts = await provider.eth.getAccounts();
    let approved = await sweetContract.methods
      .approve(sweetFreezing, maxApprove)
      .send({
        from: accounts[0],
      });
    let maxApproveed = provider.utils.toWei(
      await sweetContract.methods.allowance(accounts[0], sweetFreezing).call()
    );
    localStorage.setItem("maxapprove", JSON.stringify(maxApproveed));
  };
  const freezeSwt = async () => {
    setfirst(true);
    loading.current = true;
    let freezingSweet = await new provider.eth.Contract(
      SweetFreezingTest_abi as AbiItem[],
      sweetFreezing
    );

    let accounts = await provider.eth.getAccounts();

    let blocks = await freezingSweet.methods.getBlocksPerDay().call();

    await freezingSweet.methods
      .freezeSWT(provider.utils.toWei(sweetCoin), blocks * days)
      .send({
        from: accounts[0],
      });

    let getFreezes = await freezingSweet.methods.getFreezes(accounts[0]).call();

    dispatch(SocialActionCreators.setFreezesBlock(getFreezes));
  };

  useEffect(() => {
    async function contractData() {
      // dispatch(SocialActionCreators.setFreezesBlock(getFreezes));

      let sweetContract = await new provider.eth.Contract(
        SweetTokkenTest_abi as AbiItem[],
        sweetAddress
      );
      let accounts = await provider.eth.getAccounts();
      let maxApproveed = provider.utils.toWei(
        await sweetContract.methods.allowance(accounts[0], sweetFreezing).call()
      );
      setMaxAppproved(maxApproveed);
    }

    contractData();
  }, []);
  useEffect(() => {
    loading.current = false;
    if (!loading.current) {
      setfirst(false);
    }
  }, [freezes]);
  useEffect(() => {
    loading.current = false;
    if (!loading.current) {
      setfirst(false);
    }
  }, [maxAppprove]);
  return (
    <>
      {Number(maxAppprove) > 0 ? (
        <Button onClick={() => freezeSwt()}>
          freezeSwt
          {loading.current || first ? (
            <ClipLoader color={color} size={20} />
          ) : null}
        </Button>
      ) : (
        <Button onClick={() => stakeApprove()}>
          Approve
          {loading.current || first ? (
            <ClipLoader color={color} size={20} />
          ) : null}
        </Button>
      )}
    </>
  );
}
