import React from "react";
import ConnectButton from "./ConnectButton";
import { Flex, useDisclosure } from "@chakra-ui/react";
interface Iprops {
  connectWallet: (bool: boolean) => void
}
const WalletConnect = ({connectWallet}: Iprops) => {
  const { isOpen: connectOpen, onOpen, onClose } = useDisclosure();
  
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
          flexDirection: "row"
        }}
      >
        <ConnectButton handleOpenModal={onOpen} connectOpen={connectOpen} connectWallet={connectWallet}/>
      </Flex>
    </div>
  );
};
export default WalletConnect;
