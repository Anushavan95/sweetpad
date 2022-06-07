import React, { useContext, useEffect, useState } from "react";
import { Button, useToast } from "@chakra-ui/react";
import { EmptyLength, WalletStatus } from "../../types/types";
// import { WalletContext } from "../../Context/WalletContext";
import { WalletContent } from "./WalletContent";
import pic from "../../svg/Sweet-Dragon-social.gif";
import picMobile from "../../svg/Sweet-Dragon-mobile.gif";

import SocialService from "../../api/SocialService";
import Step from "./step";
import { useDisclosure } from "@chakra-ui/react";
import { ReactComponent as Wallet } from "../../svg/wallet.svg";
import { useDispatch } from "react-redux";
import SocialItems from "./SocialItems";
import SocialModal from "./SocialModal";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
const wallet = {
  id: 999,
  icon: <Wallet />,
  name: "Connect Wallet ",
  isHasAccount: false,
  key: "wallet",
  memberText: false,
};

export interface IItem {
  name: string;
  linkName: string;
  id: React.Key | null | undefined;
  backName: any;
  icon: any;
  check: any;
  disabled: any;
}

const SocialLinks = () => {
  const { accountLocal } = useTypedSelector((state) => state.socials);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const { setConnected, connected } = useContext(WalletContext);
  const [connected, setConnected] = useState<boolean>(false);

  const [socialName, setSocialName] = useState<string>("");
  const toast = useToast();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [socials, setSocials] = useState<any>([]);

  useEffect(() => {
    !connected ? setActiveStep(0) : setActiveStep(1);
  }, [connected]);

  useEffect(() => {
    if (!accountLocal) {
      setSocials((prev: any[]) =>
        prev.map((item: any) => {
          return { ...item, check: false, disabled: true };
        })
      );
    } else {
      try {
        SocialService.getSocialInfo(accountLocal).then((res) => {
          if (res.data && Object.keys(res.data).length > EmptyLength.zero) {
            dispatch(SocialActionCreators.setToken(res.data.telegram_token));
            dispatch(SocialActionCreators.setWallet(res.data.wallet));
            let configs =
              res.data.networks.length > 0
                ? JSON.parse(res.data.networks[0].pivot.configs)
                : "";
            res.data.networks.length > 0 &&
              setActiveStep(res.data.networks.length + 1);
            if (res.data.networks && Object.keys(configs).length > 0) {
              setActiveStep(res.data.networks.length + 1);
              let id = res.data.networks[0].id;
              let newNetworkIds = res.data.networks.map((res: any) => res.id);
              let subscription_parse = JSON.parse(
                res.data.networks[0].pivot.configs
              );
              if (
                id &&
                subscription_parse.group_subscription &&
                subscription_parse.channel_subscription
              ) {
                setSocials((prev: any[]) =>
                  prev.map((item: any) => {
                    if (newNetworkIds.includes(item.id)) {
                      item.check = true;
                      return { ...item, disabled: false };
                    } else {
                      return { ...item, check: false, disabled: false };
                    }
                  })
                );
              } else {
                setActiveStep(1);
              }
            } else {
              setSocials((prev: any[]) =>
                prev.map((item: any) => {
                  return { ...item, check: false, disabled: false };
                })
              );
            }
          }
        });
      } catch (e) {}
    }
  }, [accountLocal]);
  useEffect(() => {
    SocialService.getSocial().then((res) => {
      res.data.map((item: { check: boolean; disabled: boolean }) => {
        let newSocial = { ...item, check: false, disabled: true };
        return setSocials((prev: any) => {
          return [...prev, newSocial];
        });
      });
    });
  }, []);

  let content = socials?.map((item: IItem) => {
    if (item.name === "Telegram") {
      item.linkName = "#tele";
    }
    if (item.name === "Twitter") {
      item.linkName = "#tweet";
    }
    if (item.name === "Youtube") {
      item.linkName = "#you";
    }
    if (item.name === "Reddit") {
      item.linkName = "#redd";
    }
    if (item.name === "Discord") {
      item.linkName = "#disc";
    }
    if (item.name === "Tiktok") {
      item.linkName = "#tik";
    }
    if (item.name === "Facebook") {
      item.linkName = "#face";
    }
    if (item.name === "Medium.com") {
      item.name = "Medium.com";
      item.linkName = "#medium";
    }
    if (item.name === "Instagram") {
      item.linkName = "#insta";
    }

    return (
      <div key={item.id} className="item-next-link">
        <SocialItems
          onOpen={onOpen}
          setSocials={setSocials}
          name={item.name}
          id={item.id}
          icons={item.icon}
          account={accountLocal}
          check={item.check}
          linkName={item.linkName}
          isDisabled={item.disabled}
          onClick={() => {}}
          setSocialName={setSocialName}
        />
      </div>
    );
  });

  return (
    <div className="roadMap_container social-drag-road">
      <div className="pool-title">
        <Button className="roadMap-header" id="social">
          Airdrop
        </Button>
      </div>

      {/* <p className="roadMap-text">
        Join our channels and get your Sweet coin when we launch.
      </p> */}
      <Step activeStep={activeStep} />
      <div className="social_columns">
        {/* <div className="parent-drag">
          <img src={pic} alt="may" className="roadMap_images" />
          <img src={picMobile} alt="may" className="roadMap_images-mobile" />
        </div> */}
        <div className="social-connect-links">
          <WalletContent wallet={wallet} account={accountLocal} />
          {content}
        </div>
        {/* <div>
          <img src={drag} alt="Dragon-social" className="drag-social" />
        </div> */}
      </div>
      {activeStep === 7 ? (
        <div className="social-text-footer">
          Congrats! you are a member of our Community.
        </div>
      ) : (
        ""
      )}

      <SocialModal
        setActiveStep={setActiveStep}
        isOpen={isOpen}
        onClose={onClose}
        socialName={socialName}
        socials={socials}
      />
    </div>
  );
};
export default SocialLinks;
