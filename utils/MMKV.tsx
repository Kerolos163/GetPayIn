import MMKVStorage from "react-native-mmkv-storage";

const MMKV = new MMKVStorage.Loader().initialize(); //! Initialize MMKV

export default MMKV; //! Export MMKV
