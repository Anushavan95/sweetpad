import { Button } from "@chakra-ui/react";
import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { sweetAddress, sweetFreezing } from "../../../utils/contractaddresses";
import { AbiItem } from "web3-utils";
import SweetTokkenTest_abi from "../../../utils/ABI/sweet-tokken-test.json";
import SweetFreezingTest_abi from "../../../utils/ABI/sweet-freezing-test.json";

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

  const stakeSweet = async () => {
    // maxApprove = ethers.constants.MaxUint256;

    let sweetContract = new provider.eth.Contract(
      SweetTokkenTest_abi as AbiItem[],
      sweetAddress
    );
    // console.log(maxApprove, "maxApprove");

    // let c = await provider.utils.toWei(1000000);
    let accounts = await provider.eth.getAccounts();
    // sweetcontract
    await sweetContract.methods.approve(sweetAddress, 1000000).send({
      from: accounts[0],
    });
    // balance && setAprooved(true);
  };
  const freezeSwt = async () => {
    let freezingSweet = new provider.eth.Contract(
      SweetFreezingTest_abi as AbiItem[],
      sweetFreezing
    );
    // conso
    console.log(freezingSweet, "freezingSweet");
    let c = await freezingSweet.methods.freezeSWT(1000000, 2).call();
    console.log(c, "freeze");
  };
  return (
    <>
      <Button onClick={() => stakeSweet()}>Approve </Button>{" "}
      <Button onClick={() => freezeSwt()}>freezeSwt</Button>
    </>
  );
}
