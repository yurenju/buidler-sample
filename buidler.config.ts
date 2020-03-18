import { usePlugin } from "@nomiclabs/buidler/config";

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("solidity-coverage");

export default {
  networks: {
    coverage: {
      url: "http://127.0.0.1:8555"
    }
  }
};
