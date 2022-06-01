import { useState } from "react";
import MyApp from "./Web3Modal/App";

type Props = {
  handleOpenModal: () => void;
  connectOpen: boolean;
  connectWallet: (bool: boolean) => void;
};

export default function ConnectButton({
  handleOpenModal,
  connectOpen,
  connectWallet,
}: Props) {
  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  let userAccount = localStorage.getItem("account");
  async function open() {
    if (!userAccount) {
      setmodalOpen(true);
    }
  }

  return (
    <div className="buttons-config">
      <MyApp
        modalOpen={modalOpen}
        setmodalOpen={setmodalOpen}
        connectOpen={connectOpen}
        handleOpenModal={handleOpenModal}
        connectWallet={connectWallet}
      />
    </div>
  );
}
