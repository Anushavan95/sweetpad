import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { SocialActionCreators } from "../../../../store/reducers/socials/action-creators";
// import AccountDrawwer from "../../AccountDrawer";
import { Button, useDisclosure } from "@chakra-ui/react";
import Drawer from "../../AccountDrawer";

const SHeader = styled.div`
  margin-top: -1px;
  margin-bottom: 1px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  address: string;
  chainId: number;
  accountLocal: any;
  onConnect: () => void;
}

const Header = (props: IHeaderProps) => {
  const { onClose } = useDisclosure();

  const dispatch = useDispatch();
  // @ts-ignore

  const { killSession, onConnect, address } = props;

  function killSessionCall() {
    killSession();
    localStorage.clear();
    dispatch(SocialActionCreators.setIsAddresConnected(false));

    dispatch(SocialActionCreators.setIsConnectButtonClicked(false));
    onClose();
  }
  let newAddres = address;
  if (!newAddres) {
    let test = JSON.parse(localStorage.getItem("walletconnect") || "{}");
    newAddres = test.accounts !== undefined ? test.accounts[0] : address;
  }
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <SHeader {...props} className="connected-wallet-p">
      {newAddres ? (
        <div>
          <Button type="button" onClick={handleOpen} className="my-account">
            My Account
          </Button>
          <Drawer
            anchor="right"
            open={open}
            onClose={handleClose}
            killSessionCall={killSessionCall}
          />
        </div>
      ) : (
        <button onClick={onConnect} className={"connect-btn-wallet"}>
          Connect wallet
        </button>
      )}
    </SHeader>
  );
};

Header.propTypes = {
  killSession: PropTypes.func.isRequired,
  address: PropTypes.string,
};

export default Header;
