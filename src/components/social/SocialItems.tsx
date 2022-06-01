import React, {useState} from "react";
import { ReactComponent as CheckNotActive } from "../../svg/notActive.svg";
import { ReactComponent as Checked } from "../../svg/cheked.svg";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SocialService from "../../api/SocialService";
import {useToast} from "@chakra-ui/react";
import { WalletStatus} from "../../types/types";


export enum ISocialLinkName {
     TELEGRAM = 'https://t.me/sweetpadofficial',
    TWITTER  = 'https://twitter.com/SweetPad_',
    YOUTUBE  = 'https://youtube.com/channel/UCVlg4Abe1XIWbXYyD6aMixA',
    DISCORD  = 'https://discord.gg/ryPYj2Uc',
    REDDIT   = 'https://www.reddit.com/r/SweetPad_Official/',
    TIKTOK   = 'https://vm.tiktok.com/ZSeahCPgn/',
    FACEBOOK = 'https://www.facebook.com/SweetPad-official-111890581352736',
    MEDIUM   = 'https://medium.com/@sweetpad.io.official',
    INSTAGRAM =  'https://instagram.com/sweetpad.io?utm_medium=copy_link'
}
const SocialItems = (props: any) => {

  const IMAGE_URL = "https://api.sweetpad.io";
  const dispatch = useDispatch();
  const { wallet_id, token } = useTypedSelector((state) => state.socials);
  const [countPopUp, setCountPopUp] = useState(false);
  const toast = useToast();
  const clickOpenModal = (e: { preventDefault: () => void }): any => {
    switch (props.linkName) {
      case "#tele":
        e.preventDefault();
        props.setSocialName(props.name);
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
             if(!res.data.group_subscription || !res.data.channel_subscription) {
               dispatch(SocialActionCreators.connectUserInNetwork(props.id, wallet_id));
               props.onOpen();
             }else {
               window.open(ISocialLinkName.TELEGRAM, '_blank');
             }
          })
        }
        break;
      case "#tweet":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if(res.data.group_subscription  && res.data.channel_subscription && !props.check) {
              props.setSocialName(props.name);
              props.onOpen();
            }else {
              window.open(ISocialLinkName.TWITTER, '_blank');
            }
          })
        }
        break;
      case "#you":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if (res.data.group_subscription  && res.data.channel_subscription && !props.check){
              props.setSocialName(props.name);
              props.onOpen();
            }else {
              window.open(ISocialLinkName.YOUTUBE, '_blank');
            }
          })
        }
        break;
      case "#disc":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if(res.data.group_subscription && res.data.channel_subscription && !props.check) {
              props.setSocialName(props.name);
              props.onOpen();
            } else {
              window.open(ISocialLinkName.DISCORD, '_blank');
            }
          })
        }
        break;
        case "#insta":
          e.preventDefault();
          if(wallet_id && token) {
            SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
              if(!res.data.group_subscription || !res.data.channel_subscription) {
                if (countPopUp) {
                  return false;
                }
                toast({
                  description: "Please Join Instagram First",
                  status: WalletStatus.warning,
                  position: "top",
                  duration: 3000,
                  isClosable: true
                });
                setCountPopUp(true);
                setTimeout(() => setCountPopUp(false), 3000);
              }else if(res.data.group_subscription && res.data.channel_subscription && !props.check) {
                props.setSocialName(props.name);
                props.onOpen();
              } else {
                window.open(ISocialLinkName.INSTAGRAM, '_blank');
              }
            })
          }
          break;
      case "#redd":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if(res.data.group_subscription && res.data.channel_subscription && !props.check) {
              props.setSocialName(props.name);
              props.onOpen();
            } else {
              window.open(ISocialLinkName.REDDIT, '_blank');
            }
          })
        }
        break;
      case "#tik":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if(res.data.group_subscription && res.data.channel_subscription && !props.check) {
              props.setSocialName(props.name);
              props.onOpen();
            } else {
              window.open(ISocialLinkName.TIKTOK, '_blank');
            }
          })
        }
        break;
      case "#face":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if (res.data.group_subscription && res.data.channel_subscription && !props.check) {
              props.setSocialName(props.name);
              props.onOpen();
            } else {
              window.open(ISocialLinkName.FACEBOOK, '_blank');
            }
          })
        }
        break;
        case "#insta":
          e.preventDefault();
          if(wallet_id && token) {
            SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
              if(!res.data.group_subscription || !res.data.channel_subscription) {
                if (countPopUp) {
                  return false;
                }
                toast({
                  description: "Please Join Telegram First",
                  status: WalletStatus.warning,
                  position: "top",
                  duration: 3000,
                  isClosable: true
                });
                setCountPopUp(true);
                setTimeout(() => setCountPopUp(false), 3000);
              }else if (res.data.group_subscription && res.data.channel_subscription && !props.check) {
                props.setSocialName(props.name);
                props.onOpen();
              } else {
                window.open(ISocialLinkName.INSTAGRAM, '_blank');
              }
            })
          }
          break;
      case "#medium":
        e.preventDefault();
        if(wallet_id && token) {
          SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
            if(!res.data.group_subscription || !res.data.channel_subscription) {
              if (countPopUp) {
                return false;
              }
              toast({
                description: "Please Join Telegram First",
                status: WalletStatus.warning,
                position: "top",
                duration: 3000,
                isClosable: true
              });
              setCountPopUp(true);
              setTimeout(() => setCountPopUp(false), 3000);
            }else if(res.data.group_subscription && res.data.channel_subscription && !props.check) {
              dispatch(SocialActionCreators.connectUserInNetwork(props.id, wallet_id));
              props.setSocialName(props.name);
              props.onOpen();
            }else {
              window.open(ISocialLinkName.MEDIUM, '_blank');
            }
          })
        }
        break;
      default:
        break;
    }
  };
 

  return (
    <div
      className={`roadMap_container-item social ${
         !props.account ? "social-item-opacity" : ""
      }`}
    >
      <button
        onClick={clickOpenModal}
        className={!props.account ? "no-click" : ""}
      >
        <a href={props.linkName} target="_blank" className="linkName">
          <div className="info-item-border social-border">
            <div className="social-item">
              <span className="social-item-container">
                <span className="social_icon">
                  <img src={`${IMAGE_URL}${props.icons}`} alt="" />
                </span>
                <span className="social_Name">
                  {props.name}
                  {props.account && props.check ? (
                    <span className="subscribe"> Subscribed</span>
                  ) : (
                    ""
                  )}
                </span>
                <span className="social_check">
                  {props.account && props.check ? (
                    <Checked />
                  ) : (
                    <CheckNotActive />
                  )}
                </span>
              </span>
            </div>
          </div>
        </a>
      </button>
    </div>
  );
};
export default SocialItems;
