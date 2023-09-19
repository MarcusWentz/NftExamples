require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const SEPOLIA_RPC_URL = process.env.sepoliaInfuraHttps

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [`0x${process.env.devTestnetPrivateKey}`]
    },
    taiko: {
      url: "https://rpc.jolnir.taiko.xyz",
      accounts: [`0x${process.env.devTestnetPrivateKey}`]
    },
  },
  etherscan: { 
  // Sepolia Etherscan
    apiKey: process.env.etherscanApiKey
  },
  // // Taiko Blockscout
  // apiKey: {
  //   taiko: "42069",
  // },
  // customChains: [
  //     {
  //       network: "taiko",
  //       chainId: 167007,
  //       urls: {
  //           apiURL: "https://blockscoutapi.jolnir.taiko.xyz/api",
  //           browserURL: "https://explorer.jolnir.taiko.xyz/",
  //       },
  //     },
  //   ],
  // }
}
