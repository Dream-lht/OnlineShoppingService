import axios from "axios";
import { WE_CHAT_URL } from "../app/config";
import type { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: WE_CHAT_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

function request(config: AxiosRequestConfig) {
  return instance.request(config);
}

export default request;
