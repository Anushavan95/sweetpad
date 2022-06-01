export enum SocialActionEnum {
  SET_RESULT = "SET_RESULT",
  SET_TOKEN = "SET_TOKEN",
  SET_WALLET_ID = "SET_WALLET_ID",
  SET_TELEGRAM_SUBSCRIPTION = "SET_TELEGRAM_SUBSCRIPTION",
  SET_SLIDER_INDEX = "SET_SLIDER_INDEX",
  SET_DISABELD_TAB = "SET_DISABELD_TAB",
  SET_BALANCE = "SET_BALANCE",
  SET_ISADDRES = "SET_ISADDRES",
  SET_CLICK_BUTTON = "SET_CLICK_BUTTON",
  SET_ACCOUNT_LOCAL = "SET_ACCOUNT_LOCAL",
  SET_CLICKED_BUY = "SET_CLICKED_BUY",
  SET_BUSD_COIN = "SET_BUSD_COIN",
  SET_SWEET_COIN = "SET_SWEET_COIN",
}
export interface SocialState {
  result: number;
  token: null | string;
  wallet_id: undefined | null | string;
  isTelegramConnected: boolean;
  sliderIndex: number;
  disabledTab: boolean;
  balanceCount: any;
  isAddress: boolean;
  isConnectButtonClick: boolean;
  accountLocal: string;
  clickedBuySweet: boolean;
  busdCoin: number;
  sweetCoin: any;
}
export interface Items {
  check: boolean;
  disabled: boolean;
  icon: any;
  id: number;
  linkName: string;
  name: string;
  backName: string;
  memberText: boolean;
}
export interface StepItems {
  id: number;
  img: any;
  line: Boolean;
  status: Boolean;
}
export interface ILinks {
  id: number;
  icons: any;
  name: string;
  check: boolean;
  linkName: string;
  backName: string;
  onClick: (backName: string) => void;
  isDisabled: boolean;
  account: undefined | null | string;
}

export interface IWallet {
  wallet: {
    id: number;
    icon: any;
    name: string;
    isHasAccount: boolean;
    key: string;
    memberText: boolean;
  };
  account: undefined | null | string;
}
