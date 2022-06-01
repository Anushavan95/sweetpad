import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import TelegramModal from "./socialModalComponents/TelegramModal";
import TwitterModal from "./socialModalComponents/TweeterModal";
import YoutubeModal from "./socialModalComponents/YoutubeModal";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import TiktokModal from "./socialModalComponents/TiktokModal";
import FacebookModal from "./socialModalComponents/FacebookModal";
import { useState } from "react";
import SocialService from "../../api/SocialService";
import {
  DISCORD,
  FACEBOOK,
  isEmail,
  isReddit,
  isSocialValidation,
  INSTAGRAM,
  MEDIUM,
  REDDIT,
  TIKTOK,
  TWITTER,
  YOUTUBE,
} from "../../helper/emailValidation";
import InstagramModal from "./socialModalComponents/InstagramModal";
interface Props {
  isOpen: boolean;
  socialName: string;
  onClose: () => void;
  socials: any;
  setActiveStep: (prev: any) => void;
}

export enum SocialErrorMessage {
  Chanel = "You are not subscribed to the channel, please subscribe",
  Group = "You are not subscribed to the group, please subscribe",
  Facebook = "Invalid Facebook URL",
  Email = "Invalid Email Address",
  Social = "Username must start with @",
  Reddit = "Username must start with u/",
  Discord = "This field is required",
  Instagram = "Invalid Instagram URL",
}

export default function SocialModal({
  isOpen,
  onClose,
  socialName,
  socials,
  setActiveStep,
}: Props) {
  const { wallet_id, token } = useTypedSelector((state) => state.socials);
  const [youtubeName, setYoutubeName] = useState("");
  const [tweeterName, setTweeterName] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [redditName, setRedditName] = useState("");
  const [mediumName, setMediumName] = useState("");
  const [facebookName, setFacebookName] = useState("");
  const [instagarmName, setaInstagramName] = useState("");

  const [tikTokName, setTiktokName] = useState("");
  const [errorMessageChannel, setErrorMessageChannel] = useState("");
  const [errorMessageGroup, setErrorMessageGroup] = useState("");
  const [allMessage, setAllMessage] = useState("");
  const dispatch = useDispatch();
  const doneTelegramConnect = () => {
    if (socialName === "Telegram") {
      if (wallet_id && token) {
        SocialService.checkUserWithWallet(wallet_id, token).then((res) => {
          if (res.data.channel_subscription && res.data.group_subscription) {
            dispatch(SocialActionCreators.setSocialSubscription(res.data));
            setErrorMessageChannel("");
            setErrorMessageGroup("");
            socials[0].check = true;
            setActiveStep((prev: any) => prev + 1);
            onClose();
          } else {
            if (!res.data.channel_subscription) {
              setErrorMessageChannel(SocialErrorMessage.Chanel);
            }
            if (!res.data.group_subscription) {
              setErrorMessageGroup(SocialErrorMessage.Group);
            }
          }
        });
      }
    }
    if (socialName === YOUTUBE) {
      let email = isEmail(youtubeName);
      if (youtubeName === "" || email !== "") {
        setAllMessage(email || SocialErrorMessage.Email);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.youtubeConnection("7", wallet_id, youtubeName).then(
              () => {
                socials[4].check = true;
                setActiveStep((prev: number) => prev + 1);
                setAllMessage("");
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === TWITTER) {
      let twitter = isSocialValidation(tweeterName);
      if (tweeterName === "" && !twitter) {
        setAllMessage(SocialErrorMessage.Social);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.tweeterConnection("2", wallet_id, tweeterName).then(
              () => {
                setAllMessage("");
                socials[1].check = true;
                setActiveStep((prev: number) => prev + 1);
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === DISCORD) {
      if (discordName.trim() === "") {
        setAllMessage(SocialErrorMessage.Discord);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.discordConnection("3", wallet_id, discordName).then(
              () => {
                setAllMessage("");
                socials[5].check = true;
                setActiveStep((prev: number) => prev + 1);
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === REDDIT) {
      let reddit = isReddit(redditName);
      if (redditName === "" || !reddit) {
        setAllMessage(SocialErrorMessage.Reddit);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.redditConnection("4", wallet_id, redditName).then(
              () => {
                setAllMessage("");
                socials[6].check = true;
                setActiveStep((prev: number) => prev + 1);
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === MEDIUM) {
      let medium = isSocialValidation(mediumName);
      if (mediumName === "" || !medium) {
        setAllMessage(SocialErrorMessage.Social);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.mediumConnection("5", wallet_id, mediumName).then(
              () => {
                setAllMessage("");
                socials[7].check = true;
                setActiveStep((prev: number) => prev + 1);
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === TIKTOK) {
      let tiktok = isSocialValidation(tikTokName);
      if (tikTokName === "" || !tiktok) {
        setAllMessage(SocialErrorMessage.Social);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.tiktokConnection("6", wallet_id, tikTokName).then(
              () => {
                setAllMessage("");
                socials[8].check = true;
                setActiveStep((prev: number) => prev + 1);
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === FACEBOOK) {
      if (
        facebookName.trim().split("/").pop() === "" ||
        !facebookName.includes(`facebook.com/`)
      ) {
        setAllMessage(SocialErrorMessage.Facebook);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.facebookConnection("8", wallet_id, facebookName).then(
              () => {
                setAllMessage("");
                socials[2].check = true;
                setActiveStep((prev: number) => prev + 1);
                onClose();
              }
            );
          } catch (e) {}
        }
      }
    }
    if (socialName === INSTAGRAM) {
      let insta = isSocialValidation(instagarmName);
      if (instagarmName === "" || !insta) {
        setAllMessage(SocialErrorMessage.Instagram);
        return false;
      } else {
        if (wallet_id) {
          try {
            SocialService.InstagramConnecttion(
              "9",
              wallet_id,
              instagarmName
            ).then(() => {
              setAllMessage("");
              socials[3].check = true;
              setActiveStep((prev: number) => prev + 1);
              onClose();
            });
          } catch (e) {}
        }
      }
    }
  };
  const closeModal = () => {
    onClose();
    setAllMessage("");
    setErrorMessageChannel("");
    setErrorMessageGroup("");
  };
  return (
    <div className="socialModal">
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {(function () {
              switch (socialName) {
                case "Telegram":
                  return (
                    <TelegramModal
                      token={token}
                      errorMessageChannel={errorMessageChannel}
                      errorMessageGroup={errorMessageGroup}
                    />
                  );
                case "Twitter":
                  return (
                    <TwitterModal
                      allMessage={allMessage}
                      tweeterName={tweeterName}
                      setTweeterName={(value) => setTweeterName(value)}
                    />
                  );
                case "Youtube":
                  return (
                    <YoutubeModal
                      allMessage={allMessage}
                      youtubeName={youtubeName}
                      setYoutubeName={(value) => setYoutubeName(value)}
                    />
                  );
                // case "Discord":
                //   return (
                //     <DiscordModal
                //       allMessage={allMessage}
                //       discordName={discordName}
                //       setDiscordName={(value) => setDiscordName(value)}
                //     />
                //   );
                // case "Reddit":
                //   return (
                //     <RedditModal
                //       allMessage={allMessage}
                //       redditName={redditName}
                //       setRedditName={(value) => setRedditName(value)}
                //     />
                //   );
                case "Tiktok":
                  return (
                    <TiktokModal
                      allMessage={allMessage}
                      tiktokName={tikTokName}
                      setTikTokName={(value) => setTiktokName(value)}
                    />
                  );
                case "Facebook":
                  return (
                    <FacebookModal
                      allMessage={allMessage}
                      facebookName={facebookName}
                      setFacebookName={(value) => setFacebookName(value)}
                    />
                  );
                case "Instagram":
                  return (
                    <InstagramModal
                      allMessage={allMessage}
                      instagarmName={instagarmName}
                      setaInstagramName={(value) => setaInstagramName(value)}
                    />
                  );
                // case "Medium.com":
                //   return (
                //     <MediumModal
                //       allMessage={allMessage}
                //       mediumName={mediumName}
                //       setMediumName={(value) => setMediumName(value)}
                //     />
                //   );
                default:
                  return null;
              }
            })()}
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              className="done"
              onClick={doneTelegramConnect}
            >
              Done
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => closeModal()}
              className="cancel"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
