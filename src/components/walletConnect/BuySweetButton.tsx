import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";

interface SWTprops {
  btnName?: string;
}
export default function BuySweetButton({ btnName }: SWTprops) {
  const dispatch = useDispatch();
  const { isConnectButtonClick } = useTypedSelector((state) => state.socials);

  const handleBuySweet = () => {
    dispatch(SocialActionCreators.setClickedBuySweet(true));
  };
  const handleOpenConnect = () => {
    dispatch(SocialActionCreators.setIsConnectButtonClicked(true));
  };
  return (
    <Button
      onClick={
        isConnectButtonClick
          ? () => handleBuySweet()
          : () => handleOpenConnect()
      }
    >
      {btnName}
    </Button>
  );
}
