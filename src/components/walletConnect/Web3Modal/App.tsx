import * as React from "react";
import styled from "styled-components";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import Header from "./componentsWeb3/Header";
import BuySweet from "../BuySweet";
import { getChainData } from "./helpers/utilities";
import { IAssetData } from "./helpers/types";

const SLayout = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  text-align: center;
`;

// @ts-ignore

interface IAppState {
  accountLocal: any;
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  assets: IAssetData[];
  pendingRequest: boolean;
  result: any | null;
  localAccount: String | null;
  web3_modal: any;
}

const INITIAL_STATE: IAppState = {
  accountLocal: "",
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  pendingRequest: false,
  result: null,
  localAccount: null,
  web3_modal: null,
};

function initWeb3(provider: any) {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}
declare global {
  // tslint:disable-next-line
  interface Window {
    web3: any;
    ethereum: any;
    Web3Modal: any;
    [name: string]: any;
  }
}
class MyApp extends React.PureComponent<any, any> {
  //  dispatch = useDispatch()

  // @ts-ignore
  public web3Modal: Web3Modal;
  public state: IAppState;

  constructor(props: any) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };

    this.web3Modal = new Web3Modal({
      network: this.getNetwork(),
      cacheProvider: false,
      providerOptions: this.getProviderOptions(),
    });
  }
  public onConnect = async () => {
    try {
      const provider = await this.web3Modal.connect();

      let c = await provider.enable();

      const web3: any = initWeb3(provider);
      const accounts = await web3.eth.getAccounts();
      let address = accounts[0];
      const networkId = await web3.eth.net.getId();
      const chainId = await web3.eth.chainId();

      if (chainId == 56 || 97) {
        await this.setState({
          web3,
          provider,
          connected: true,
          address,
          chainId,
          networkId,
          web3_modal: provider,
        });

        localStorage.setItem("walletconnectedaddress", JSON.stringify(address));
        localStorage.setItem("porvider", JSON.stringify(this.state.web3_modal));
      } else if (chainId !== 56) {
        localStorage.removeItem("walletconnectedaddress");
        alert("Please change your network to Binance Smart Chain");
        this.setState({
          connected: false,
        });
      }
    } catch {
      this.props.connectWallet(false);
    }
  };

  public getNetwork = () => getChainData(this.state.chainId).network;

  public getProviderOptions = () => {
    const infuraId = "4df0caac27b747ffa2c3325aa2e812a8";
    const providerOptions = {
      walletconnect: {
        package: WalletConnect,
        options: {
          rpc: { 56: "https://bsc-dataseed1.binance.org" },

          infuraId,
          network: "binance",
          chainId: 56,
        },
        qrcodeModalOptions: {
          mobileLinks: ["trust", "metamask"],
        },
      },
    };
    return providerOptions;
  };

  public resetApp = async () => {
    const { web3 } = this.state;
    if (web3 && web3.currentProvider && web3.currentProvider.close) {
      await web3.currentProvider.close();
    }
    await this.web3Modal.clearCachedProvider();
    this.setState({ ...INITIAL_STATE });
    localStorage.clear();
  };

  public render = () => {
    let { address, connected, chainId, fetching, accountLocal } = this.state;

    return (
      <>
        <BuySweet
          {...this.props}
          webModal={this.state.web3_modal}
          userAccount={this.props.account}
          connectOpen={this.props.connectOpen}
          handleOpenModal={this.props.handleOpenModal}
          address={address}
          provider={this.state.web3}
          connected={connected}
          onConnect={this.onConnect.bind(this)}
        />
        {/* <SLayout className="success-connect"> */}
        <Header
          accountLocal={accountLocal}
          connected={connected}
          address={address}
          chainId={chainId}
          killSession={this.resetApp}
          onConnect={this.onConnect}
        />
        {/* </SLayout> */}
      </>
    );
  };
}

export default MyApp;
