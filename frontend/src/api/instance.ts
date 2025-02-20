import axios, {AxiosInstance} from "axios";
import {EXPO_PUBLIC_SERVER_URL, EXPO_PUBLIC_AUTH_PUBLIC_TOKEN} from "@/constants/env";

import {request as __request} from "./__generated__/core/request";
import {ApiRequestOptions} from "./__generated__/core/ApiRequestOptions";
import {Backend, BaseHttpRequest, CancelablePromise, OpenAPIConfig} from "./";

const token = EXPO_PUBLIC_AUTH_PUBLIC_TOKEN;

export const requestInstance = (baseUrl: string) => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};

export class RequestHttpClient extends BaseHttpRequest {
  axiosInstance: AxiosInstance;

  constructor(config: OpenAPIConfig) {
    super(config);
    this.axiosInstance = requestInstance(config.BASE);
  }

  public override request<T>(options: ApiRequestOptions): CancelablePromise<T> {
    return __request(this.config, options, this.axiosInstance);
  }
}

export const apiSdkInstance = new Backend({
  BASE: `${EXPO_PUBLIC_SERVER_URL}/api`,
}, RequestHttpClient)
