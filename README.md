# NftExamples

## Overview 

NFT animation deployed to Sepolia test network as an ERC721 token with Fleek to host Metadata securely. 

Deployed and verified smart contract source code Sepolia NFT contract.

## Verify Contract With Hardhat

Deploy
```
npx hardhat run scripts/deploy.js --network sepolia
```
Verify 
```
npx hardhat verify --contract contracts/ERC-721/WeiGoldLogo.sol:WeiGoldLogo --network sepolia <deployed_sepolia_address>
```
Note:
Run
```js
npx hardhat clean
```
if you run into this issue:
https://github.com/nomiclabs/hardhat/issues/1117

Contract deployed:

https://sepolia.etherscan.io/address/0xA67AeE51dae183F9DdDC9BE3CfC72396E8738500#code

Reference Hardhat Verify Guide:

https://hardhat.org/hardhat-runner/docs/guides/verifying


## Metadata 

Photo URL on IPFS:
https://storageapi.fleek.co/marcuswentz-team-bucket/WeiGold.gif
<img src="https://github.com/MarcusWentz/WeiGold/blob/main/Images/WeiGold.gif" alt="Wiring"/>
