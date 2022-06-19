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
  SET_PROVIDER = "SET_PROVIDER",
  SET_OPEN_BURGER_MENU = "SET_OPEN_BURGER_MENU",
  SET_USER_NFTS = "SET_USER_NFTS",
  SET_CURRENT_BLOCK = "SET_CURRENT_BLOCK",
  SET_FREEZES_BLOCK = "SET_FREEZES_BLOCK",
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
  provider: any;
  openBurgerMenu: boolean;
  userNfts: any;
  currentBlock: number | null;
  freezesBlock: Array<[]>;
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
