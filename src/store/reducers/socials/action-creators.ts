import { SocialActionEnum } from "./type";
import SocialService from "../../../api/SocialService";

export const SocialActionCreators = {
  setIsConnectButtonClicked: (payload: boolean) => ({
    type: SocialActionEnum.SET_CLICK_BUTTON,
    payload,
  }),
  setResultSlider: (payload: number) => ({
    type: SocialActionEnum.SET_RESULT,
    payload,
  }),
  setIsAddresConnected: (payload: boolean) => ({
    type: SocialActionEnum.SET_ISADDRES,
    payload,
  }),
  setToken: (payload: string) => ({
    type: SocialActionEnum.SET_TOKEN,
    payload,
  }),
  setWallet: (payload: string) => ({
    type: SocialActionEnum.SET_WALLET_ID,
    payload,
  }),
  setSocialSubscription: (payload: boolean) => ({
    type: SocialActionEnum.SET_TELEGRAM_SUBSCRIPTION,
    payload,
  }),
  connectUserInNetwork: (newtWorkId: string, walletId: string) => async () => {
    try {
      return await SocialService.connectUserInNetwork(newtWorkId, walletId);
    } catch (e) {
      console.log(e);
    }
  },
  setSliderIndex: (payload: number) => ({
    type: SocialActionEnum.SET_SLIDER_INDEX,
    payload,
  }),
  setDiasbeldTab: (payload: boolean) => ({
    type: SocialActionEnum.SET_DISABELD_TAB,
    payload,
  }),
  setAccountLocal: (payload: string) => ({
    type: SocialActionEnum.SET_ACCOUNT_LOCAL,
    payload,
  }),
  setClickedBuySweet: (payload: boolean) => ({
    type: SocialActionEnum.SET_CLICKED_BUY,
    payload,
  }),
  setBalance: (payload: any) => ({
    type: SocialActionEnum.SET_BALANCE,
    payload,
  }),
  setBusdBalance: (payload: number) => ({
    type: SocialActionEnum.SET_BUSD_COIN,
    payload,
  }),
  setSweetBalance: (payload: any) => ({
    type: SocialActionEnum.SET_SWEET_COIN,
    payload,
  }),
  setProvider: (payload: any) => ({
    type: SocialActionEnum.SET_PROVIDER,
    payload,
  }),
  setOpenBurgerMenu: (payload: boolean) => ({
    type: SocialActionEnum.SET_OPEN_BURGER_MENU,
    payload,
  }),
  setUserNfts: (payload: any) => ({
    type: SocialActionEnum.SET_USER_NFTS,
    payload,
  }),
  setCurrentBlock: (payload: number | null) => ({
    type: SocialActionEnum.SET_CURRENT_BLOCK,
    payload,
  }),
  setFreezesBlock: (payload: Array<[]>) => ({
    type: SocialActionEnum.SET_FREEZES_BLOCK,
    payload,
  }),
};
