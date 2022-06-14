import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { sweetNftAddres } from "../../../../utils/contractaddresses";
import BuyNFT from "./Buy-NFT";
import { AbiItem } from "web3-utils";
import SweetNftAbi from "../../../../utils/ABI/sweetNFT-test.json";
// import * as IPFS from "ipfs-core";
import ClipLoader from "react-spinners/ClipLoader";

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

export default function NFTstacking() {
  let [color, setColor] = useState("#ffffff");
  const { provider } = useTypedSelector((state) => state.socials);
  const [nft, setNft] = useState("");
  const [userNfts, setUserNfts] = useState<any>([]);
  const [call, setCall] = useState<any>(null);

  const stakenft = async () => {
    let sweetNfts = await new provider.eth.Contract(
      SweetNftAbi as AbiItem[],
      sweetNftAddres
    );

    console.log(sweetNfts, "sweetNfts");

    let accounts = await provider.eth.getAccounts();
    console.log(accounts, "aa");

    let a = await sweetNfts.methods.getUserNfts(accounts[0]).call();
    console.log(a, "a");

    let jsons: any = await syncronusAjax(a, sweetNfts.methods);
    console.log("t", jsons);
    setCall((prevCall: any) => {
      return [...jsons];
    });
  };

  return (
    <div>
      <h2>My NFTs</h2>

      <div className="nft-cards-section">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {call ? (
            <>
              {[...call].map((item: any) => {
                let c = item.image.replace("ipfs://", "https://ipfs.io/ipfs/");
                return (
                  <div>
                    <h2>{item.name}</h2>
                    <img
                      src={`${c}`}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <div className="spinner-loader">
              <ClipLoader color={color} size={70} />
            </div>
          )}
        </div>
      </div>
      <div className="nft-stack">
        <BuyNFT />
        <Button onClick={stakenft}>Stake</Button>
      </div>
    </div>
  );
}
