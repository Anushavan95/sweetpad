import { SocialActionEnum, SocialState } from "./type";

const initialState: SocialState = {
  result: 0,
  token: null,
  wallet_id: null,
  isTelegramConnected: false,
  sliderIndex: 0,
  disabledTab: true,
  balanceCount: 0,
  isAddress: false,
  isConnectButtonClick: false,
  accountLocal: "",
  clickedBuySweet: false,
  busdCoin: 0,
  sweetCoin: 0,
  provider: null,
  openBurgerMenu: false,
  userNfts: [],
  currentBlock: null,
  freezesBlock: [],
  freezesNftID: [],
  freezesNft: [],
  connected: false,
};
export default function socialsReducer(
  state = initialState,
  action: any
): SocialState {
  switch (action.type) {
    case SocialActionEnum.SET_CLICK_BUTTON:
      return {
        ...state,
        isConnectButtonClick: action.payload,
      };
    case SocialActionEnum.SET_RESULT:
      return { ...state, result: action.payload };
    case SocialActionEnum.SET_TOKEN:
      return { ...state, token: action.payload };
    case SocialActionEnum.SET_WALLET_ID:
      return { ...state, wallet_id: action.payload };
    case SocialActionEnum.SET_TELEGRAM_SUBSCRIPTION:
      return {
        ...state,
        isTelegramConnected:
          action.payload.group_subscription &&
          action.payload.channel_subscription,
      };
    case SocialActionEnum.SET_ACCOUNT_LOCAL:
      return { ...state, accountLocal: action.payload };
    case SocialActionEnum.SET_CLICKED_BUY:
      return { ...state, clickedBuySweet: action.payload };
    case SocialActionEnum.SET_SLIDER_INDEX:
      return { ...state, sliderIndex: action.payload };
    case SocialActionEnum.SET_DISABELD_TAB:
      return { ...state, disabledTab: action.payload };
    case SocialActionEnum.SET_BALANCE:
      return { ...state, balanceCount: action.payload };
    case SocialActionEnum.SET_ISADDRES:
      return { ...state, isAddress: action.payload };
    case SocialActionEnum.SET_BUSD_COIN:
      return { ...state, busdCoin: action.payload };
    case SocialActionEnum.SET_SWEET_COIN:
      return { ...state, sweetCoin: action.payload };
    case SocialActionEnum.SET_PROVIDER:
      return { ...state, provider: action.payload };
    case SocialActionEnum.SET_OPEN_BURGER_MENU:
      return { ...state, openBurgerMenu: !state.openBurgerMenu };
    case SocialActionEnum.SET_USER_NFTS:
      return { ...state, userNfts: action.payload };
    case SocialActionEnum.SET_CURRENT_BLOCK:
      return { ...state, currentBlock: action.payload };
    case SocialActionEnum.SET_FREEZES_BLOCK:
      return { ...state, freezesBlock: action.payload };
    case SocialActionEnum.SET_FREEZES_NFT_ID:
      return { ...state, freezesNftID: action.payload };
    case SocialActionEnum.SET_FREEZES_NFT:
      return { ...state, freezesNft: action.payload };
    case SocialActionEnum.SET_ACCOUNT_CONNECTED:
      return { ...state, connected: action.payload };
    default:
      return state;
  }
}
