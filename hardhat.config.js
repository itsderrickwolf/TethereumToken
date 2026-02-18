require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    bsc: {
      url: process.env.BSC_RPC_URL,
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY]
    },
    bscTestnet: {
      url: process.env.BSC_TESTNET_RPC_URL,
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
