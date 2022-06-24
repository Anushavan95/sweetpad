import { Button } from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {
  sweetNftAddres,
  sweetNftSFreezing,
} from "../../../../utils/contractaddresses";
import BuyNFT from "./Buy-NFT";
import { AbiItem } from "web3-utils";
import SweetNftAbi from "../../../../utils/ABI/sweetNFT-test.json";
import SweetNftFreezingAbi from "../../../../utils/ABI/nft-freezing-test.json";

// import * as IPFS from "ipfs-core";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../../../store/reducers/socials/action-creators";
import DaysCalc from "../SWT/days-calc";

let syncronusAjax = (arr, methods, time = 1000) => {
  let len = arr.length;
  let jsons: any = [];
  let interval: any = null;
  return new Promise((resolve, reject) => {
    try {
      arr.map(async (item, index) => {
        let url = await methods.tokenURI(item).call();

        fetch(url.replace("ipfs://", "https://ipfs.io/ipfs/"))
          .then((res) => res.json())
          .then((response) => {
            jsons.push(response);
          })
          .catch((err) => {
            len--;
          });
      });

      interval = setInterval(() => {
        if (len === jsons.length) {
          clearInterval(interval);
          resolve(jsons);
        }
      }, time);
    } catch (error) {
      if (interval !== null) {
        clearInterval(interval);
      }

      reject(error);
    }
  });
};

interface Iprops {
  tabIndex: number;
  isDisabledMinus: boolean;
  handleDeCrease: () => void;
  isDisabledPlus: boolean;
  days: number;
  handleInCrease: () => void;
  handleChangeDays: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlurDays: (e: any) => void;
  warningText: string;
  result: number;
}
export default function NFTstacking({
  tabIndex,
  isDisabledMinus,
  handleDeCrease,
  isDisabledPlus,
  days,
  handleInCrease,
  handleChangeDays,
  handleBlurDays,
  warningText,
  result,
}: Iprops) {
  const [nftId, setNftId] = useState<any>(null);
  const [checked, setChecked] = useState<any>([]);
  const [checkApprove, setApproved] = useState(null);

  const dispatch = useDispatch();
  let [color, _] = useState("#03a66d");
  const { provider } = useTypedSelector((state) => state.socials);

  const [call, setCall] = useState<any>([]);
  const handleCheck = (event) => {
    let updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }

    setChecked(updatedList);
  };

  useEffect(() => {
    const getUserNfts = async () => {
      let sweetNfts = await new provider.eth.Contract(
        SweetNftAbi as AbiItem[],
        sweetNftAddres
      );

      let accounts = await provider.eth.getAccounts();

      let nftsID = await sweetNfts.methods.getUserNfts(accounts[0]).call();

      let jsons: any = await syncronusAjax(nftsID, sweetNfts.methods);
      console.log(jsons, "userinchqan uni");

      setCall(() => {
        return [...jsons];
      });
      setNftId(nftsID);
      await dispatch(SocialActionCreators.setUserNfts(jsons));
      await dispatch(SocialActionCreators.setFreezesNftID(nftsID));
    };

    getUserNfts();
  }, [tabIndex, checkApprove]);

  const approveNft = async () => {
    let sweetNFT = await new provider.eth.Contract(
      SweetNftAbi as AbiItem[],
      sweetNftAddres
    );

    let accounts = await provider.eth.getAccounts();

    sweetNFT.methods.setApprovalForAll(sweetNftSFreezing, true).send({
      from: accounts[0],
    });

    let checkApprove = await sweetNFT.methods
      .isApprovedForAll(accounts[0], sweetNftSFreezing)
      .call();
    setApproved(checkApprove);
  };

  useEffect(() => {
    const getApprove = async () => {
      let sweetNFT = await new provider.eth.Contract(
        SweetNftAbi as AbiItem[],
        sweetNftAddres
      );
      let accounts = await provider.eth.getAccounts();

      let checkApprove = await sweetNFT.methods
        .isApprovedForAll(accounts[0], sweetNftSFreezing)
        .call();
      setApproved(checkApprove);
    };
    getApprove();
  }, [approveNft, tabIndex]);

  const freezeNft = async () => {
    let sweetNftFreeze = await new provider.eth.Contract(
      SweetNftFreezingAbi as AbiItem[],
      sweetNftSFreezing
    );
    let accounts = await provider.eth.getAccounts();
    let blockNftPerDay = await sweetNftFreeze.methods.blocksPerDay().call();
    console.log(blockNftPerDay, "blockNftPerDay");
    if (checked.length > 1) {
      alert("batch");
      await sweetNftFreeze.methods.freezeBatch(checked, ["1820", "1850"]).send({
        from: accounts[0],
      });
    }
    if (checked) {
      alert("freeze");
      let freezeNft = await sweetNftFreeze.methods
        .freeze(Number(checked[0]), blockNftPerDay * days)
        .send({
          from: accounts[0],
        });
      console.log(freezeNft, "freezeNft");
      // await dispatch(SocialActionCreators.setFreezesNft(freezeNft));
    } else {
      alert("check  nft");
    }
  };

  return (
    <div className="nft-calc">
      <h2>My NFTs</h2>
      <div className="nft-cards-section">
        <input type="checkbox" value="checkedall" />
        <div className="nft-cards">
          {call ? (
            <>
              {[...call]?.map((item: any, index: number) => {
                if (nftId) {
                  item.id = nftId[index];
                  item.isChecked = false;
                }

                let image = item.image.replace(
                  "ipfs://",
                  "https://ipfs.io/ipfs/"
                );
                return (
                  <label>
                    <div>
                      <input
                        value={item?.id}
                        type="checkbox"
                        onChange={handleCheck}
                      />
                      <span className="nft-name">{item.name}</span>
                      <img className="img-nft-card" src={`${image}`} />
                    </div>
                  </label>
                );
              })}
            </>
          ) : (
            <div className="spinner-nft">
              <ClipLoader color={color} size={30} />
            </div>
          )}
        </div>
      </div>
      <DaysCalc
        isDisabledMinus={isDisabledMinus}
        handleDeCrease={handleDeCrease}
        isDisabledPlus={isDisabledPlus}
        handleInCrease={handleInCrease}
        days={days}
        handleChangeDays={handleChangeDays}
        handleBlurDays={handleBlurDays}
        warningText={warningText}
        result={result}
      />
      <div className="nft-stack">
        <BuyNFT />
        {checkApprove ? (
          <Button onClick={() => freezeNft()}>Stake</Button>
        ) : (
          <Button onClick={() => approveNft()}>Approve</Button>
        )}
      </div>
    </div>
  );
}
