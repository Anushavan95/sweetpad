import { Button } from "@chakra-ui/react";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { sweetAddress, sweetFreezing } from "../../../utils/contractaddresses";
import { AbiItem } from "web3-utils";
import SweetTokkenTest_abi from "../../../utils/ABI/sweet-tokken-test.json";
import SweetFreezingTest_abi from "../../../utils/ABI/sweet-freezing-test.json";
import { ethers } from "ethers";

declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    [name: string]: any;
  }
}

export default function SwtStacking() {
  const { provider } = useTypedSelector((state) => state.socials);
  let account = localStorage.getItem("walletconnectedaddress");
  const stakeApprove = async () => {
    let maxApprove: any = ethers.constants.MaxUint256;

    let sweetContract = new provider.eth.Contract(
      SweetTokkenTest_abi as AbiItem[],
      sweetAddress
    );
    // console.log(sweetContract, "sweetContract");

    // // console.log(maxApprove, "maxApprove");
    // console.log(sweetContract, "sweetContract");
    // let c = await provider.utils.toWei(1000000);
    let accounts = await provider.eth.getAccounts();
    let maxApproveed = provider.utils.toWei(
      await sweetContract.methods.allowance(accounts[0], sweetFreezing).call()
    );
    console.log(maxApproveed, "maxApproveed");

    // console.log(maxApproveed, "maxApproveed");
    // freezingi contractin
    // sweetcontract
    await sweetContract.methods.approve(sweetAddress, maxApprove).send({
      from: accounts[0],
    });
    // balance && setAprooved(true);
  };
  const freezeSwt = async () => {
    let freezingSweet = new provider.eth.Contract(
      SweetFreezingTest_abi as AbiItem[],
      sweetFreezing
    );
    let accounts = await provider.eth.getAccounts();
    let a = await freezingSweet.methods.getBlocksPerDay().call();
    let getFreezes = await freezingSweet.methods.getFreezes(accounts[0]).call();
    console.log(getFreezes, "getFreezesgetFreezes");

    // console.log(getFreezes, "getFreezes");
    // console.log(a, "aaa");

    // console.log(freezingSweet, "freezingSweet");
    let c = await freezingSweet.methods.freezeSWT("20000", "2790").call();
    console.log(c);
    console.log(11111);

    // console.log(c, "c");

    // let b = await freezingSweet.methods.getBlocksPerDay.call();
    // console.log(b, "11");

    // console.log(c, "freeze");
    // maxApprove մի անգամ
    // safepall
  };
  return (
    <>
      <Button onClick={() => stakeApprove()}>
        {account ? <> Approve </> : <> Connect Wallet</>}
      </Button>{" "}
      <Button onClick={() => freezeSwt()}>freezeSwt</Button>
    </>
  );
}
