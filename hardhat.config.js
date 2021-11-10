require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan")
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const PRIVATE_KEY = process.env.devTestnetPrivateKey
const RINKEBY_RPC_URL = process.env.rinkebyInfuraAPIKey

module.exports = {
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [`0x${process.env.devTestnetPrivateKey}`]
    }
  },
    etherscan: {
    apiKey: process.env.etherscanAPIKey
  },
  solidity: "0.8.9"
};
