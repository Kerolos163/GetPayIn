import MMKV from "./MMKV";
import type { PersistedClient } from "@tanstack/react-query-persist-client";
import constant from "./constant";

const persistClient = async (client: PersistedClient) => {
  try {
    const json = JSON.stringify(client);
    await MMKV.setStringAsync(constant.reactCasheKey, json);
  } catch (error) {
    console.log(error);
  }
};

const restoreClient = async () => {
  try {
    const json = await MMKV.getStringAsync(constant.reactCasheKey);
    return json ? JSON.parse(json) : undefined;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const removeClient = async () => {
  try {
    await MMKV.removeItem(constant.reactCasheKey);
  } catch (error) {
    console.log(error);
  }
};

export default { persistClient, restoreClient, removeClient };
