import React from "react";
import { IWallet } from "../../store/reducers/socials/type";
import { ReactComponent as Checked } from "../../svg/cheked.svg";
import { ReactComponent as CheckNotActive } from "../../svg/notActive.svg";
import { SocialActionCreators } from "../../store/reducers/socials/action-creators";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const WalletContent = ({ wallet }: IWallet) => {
  const { accountLocal } = useTypedSelector((state) => state.socials);

  const dispatch = useDispatch();
  const connectWalletAirdrops = (bool: boolean) => {
    dispatch(SocialActionCreators.setIsConnectButtonClicked(bool));
  };

  return (
    <div className="roadMap_container-item social">
      <button onClick={() => connectWalletAirdrops(true)}>
        <div className="info-item-border social-border ">
          <div className="social-item">
            <span className="social-item-container">
              <span className="social_icon">{wallet.icon}</span>
              <span className="social_Name">
                {wallet.name}
                {/* {accountLocal !== undefined ? (
                  <WalletAccountWithoutClick accountLocal={accountLocal} />
                ) : (
                  ""
                )} */}
              </span>
              <span className="social_check ">
                {accountLocal ? <Checked /> : <CheckNotActive />}
              </span>
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};
