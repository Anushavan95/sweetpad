import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import { useToast } from "@chakra-ui/react";
import { WalletStatus } from "../../types/types";
interface SWTprops {
  btnName?: string;
}
export default function BuySweetButton({ btnName }: SWTprops) {
  const toast = useToast();
  const [countPopUp, setCountPopUp] = useState(false);
  const openPopUp = (event: React.MouseEvent<HTMLElement>) => {
    if (countPopUp) {
      return false;
    }

    toast({
      status: WalletStatus.success,
      position: "top",
      duration: 3000,
      isClosable: true,
      render: () =>
        !countPopUp ? (
          <div className={"coming-soon buy-sweet-coming"}>Coming Soon</div>
        ) : null,
    });

    setCountPopUp(true);
    setTimeout(() => setCountPopUp(false), 3000);
  };
  const dispatch = useDispatch();
  const { isConnectButtonClick } = useTypedSelector((state) => state.socials);

  const handleBuySweet = () => {
    dispatch(SocialActionCreators.setClickedBuySweet(true));
  };
  const handleOpenConnect = () => {
    dispatch(SocialActionCreators.setIsConnectButtonClicked(true));
  };
  let locale = localStorage.getItem("walletconnectedaddress");
  return (
    <>
      {locale ? (
        <Button onClick={openPopUp}>{btnName}</Button>
      ) : (
        <Button
          // onClick={
          //   isConnectButtonClick ? () => openPopUp() : () => handleOpenConnect()
          // }
          onClick={handleOpenConnect}
        >
          {btnName}
        </Button>
      )}
    </>
  );
}
