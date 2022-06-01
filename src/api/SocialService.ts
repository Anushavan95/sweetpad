import { AxiosResponse } from "axios";
import axios from "./axios";
export default class SocialService {
  //Example
  static async getSocial(): Promise<AxiosResponse> {
    return axios.get(`/network`);
  }
  static async checkUserWithWallet(
    wallet_id: string,
    token: string
  ): Promise<AxiosResponse> {
    return axios.get(`telegram/${wallet_id}/${token}/check`);
  }
  static async connectUserInNetwork(
    network_id: string,
    wallet_id: string
  ): Promise<AxiosResponse> {
    return axios.get(`wallet/${network_id}/${wallet_id}`);
  }
  static async getSocialInfo(wallet_id: any): Promise<AxiosResponse> {
    return axios.get(`/wallet/${wallet_id}`);
  }
  static async updateSocial(socials: any): Promise<AxiosResponse> {
    return axios.post(`/store`, socials);
  }

  static async youtubeConnection(
    network_id: string,
    wallet_id: string,
    nickName: string
  ): Promise<AxiosResponse> {
    return axios.post(`/wallet/connect`, {
      network_id: network_id,
      wallet_id: wallet_id,
      nickName: nickName
    });
  }
  static async tweeterConnection(
    network_id: string,
    wallet_id: string,
    nickName: string
  ): Promise<AxiosResponse> {
    return axios.post(`/wallet/connect`, {
      network_id: network_id,
      wallet_id: wallet_id,
      nickName: nickName
    });
  }
  static async discordConnection(
    network_id: string,
    wallet_id: string,
    nickName: string
  ): Promise<AxiosResponse> {
    return axios.post(`/wallet/connect`, {
      network_id: network_id,
      wallet_id: wallet_id,
      nickName: nickName
    });
  }
  static async redditConnection(
    network_id: string,
    wallet_id: string,
    nickName: string
  ): Promise<AxiosResponse> {
    return axios.post(`/wallet/connect`, {
      network_id: network_id,
      wallet_id: wallet_id,
      nickName: nickName
    });
  }
  static async mediumConnection(
    network_id: string,
    wallet_id: string,
    nickName: string
  ): Promise<AxiosResponse> {
    return axios.post(`/wallet/connect`, {
      network_id: network_id,
      wallet_id: wallet_id,
      nickName: nickName
    });
  }
  static async tiktokConnection(
    network_id: string,
    wallet_id: string,
    nickName: string
    ): Promise<AxiosResponse> {
      return axios.post(`/wallet/connect`, {
        network_id: network_id,
        wallet_id: wallet_id,
        nickName: nickName
      });
    }
    
    static async facebookConnection(
      network_id: string,
      wallet_id: string,
      nickName: string
    ): Promise<AxiosResponse> {
      return axios.post(`/wallet/connect`, {
        network_id: network_id,
        wallet_id: wallet_id,
        nickName: nickName
      });
    }
    
    static async InstagramConnecttion(
      network_id: string,
      wallet_id: string,
      nickName: string
    ): Promise<AxiosResponse> {
      return axios.post(`/wallet/connect`, {
        network_id: network_id,
        wallet_id: wallet_id,
        nickName: nickName
      });
    }
}
