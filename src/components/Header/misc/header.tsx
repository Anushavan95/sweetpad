import React from "react";
import "./header.scss";
import WalletConnect from "../../walletConnect";
import Logo from "../../../svg/Logo";
import InfoContents from "../infoContents";
interface Iprops {
  connectWallet: (bool: boolean) => void;
}
const Header = ({ connectWallet }: Iprops) => {
  return (
    <React.Fragment>
      <header className="rowHeader">
        <div className="d-flex">
          <Logo />
          <InfoContents />
        </div>
        <WalletConnect connectWallet={(bool: boolean) => connectWallet(bool)} />
      </header>
    </React.Fragment>
  );
};
export default Header;
