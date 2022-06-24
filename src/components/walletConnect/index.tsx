import React, { useState } from "react";
import ConnectButton from "./ConnectButton";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
interface Iprops {
  connectWallet: (bool: boolean) => void;
}
const WalletConnect = ({ connectWallet }: Iprops) => {
  const { isOpen: connectOpen, onOpen, onClose } = useDisclosure();
  const { openBurgerMenu } = useTypedSelector((state) => state.socials);
  const dispatch = useDispatch();

  return (
    <div className="wallet-connect">
      <Flex
        className="elem flex-component"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{
          marginLeft: "auto",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <ConnectButton
          handleOpenModal={onOpen}
          connectOpen={connectOpen}
          connectWallet={connectWallet}
        />
        <div
          className={`burger ${openBurgerMenu ? "openMenu" : ""}`}
          onClick={() =>
            dispatch(SocialActionCreators.setOpenBurgerMenu(false))
          }
        >
          <div className="line-burger"></div>
        </div>
      </Flex>
    </div>
  );
};
export default WalletConnect;
