import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { sweetNftAddres } from "../../../../utils/contractaddresses";
import BuyNFT from "./Buy-NFT";
import { AbiItem } from "web3-utils";
import SweetNftAbi from "../../../../utils/ABI/sweetNFT-test.json";
// import * as IPFS from "ipfs-core";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../../../store/reducers/socials/action-creators";

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

export default function NFTstacking({ tabIndex }) {
  const { currentBlock, userNfts } = useTypedSelector((state) => state.socials);

  const dispatch = useDispatch();
  let [color, setColor] = useState("#03a66d");
  const { provider } = useTypedSelector((state) => state.socials);
  const [call, setCall] = useState<any>(null);

  useEffect(() => {
    console.log("use event 111");
    const getUserNfts = async () => {
      let sweetNfts = await new provider.eth.Contract(
        SweetNftAbi as AbiItem[],
        sweetNftAddres
      );

      let accounts = await provider.eth.getAccounts();

      let a = await sweetNfts.methods.getUserNfts(accounts[0]).call();

      let jsons: any = await syncronusAjax(a, sweetNfts.methods);

      setCall(() => {
        return [...jsons];
      });
      await dispatch(SocialActionCreators.setUserNfts(jsons));
    };
    getUserNfts();
  }, [tabIndex]);

  console.log(call, "111");
  const approveNft = async () => {
    let sweetNfts = await new provider.eth.Contract(
      SweetNftAbi as AbiItem[],
      sweetNftAddres
    );
    console.log(sweetNfts, "approve");
  };

  return (
    <div>
      <h2>My NFTs</h2>

      <div className="nft-cards-section">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {call ? (
            <>
              {[...call].map((item: any) => {
                let image = item.image.replace(
                  "ipfs://",
                  "https://ipfs.io/ipfs/"
                );
                return (
                  <div>
                    <h2>{item.name}</h2>
                    <img
                      src={`${image}`}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
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
      <div className="nft-stack">
        <BuyNFT />
        <Button onClick={approveNft}>Approve</Button>
      </div>
    </div>
  );
}
