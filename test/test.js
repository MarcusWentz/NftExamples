const { expect } = require("chai");
const { ethers } = require("hardhat");
provider = ethers.provider;

describe("contract WeiGoldLogo tests:", function () {

      let WeiGoldLogo;
      let WeiGoldLogoDeployed;
      let owner;
      let addr1;
      let addr2;
      let addrs;

      beforeEach(async function () {

        WeiGoldLogo = await ethers.getContractFactory('WeiGoldLogo');
        WeiGoldLogoDeployed = await WeiGoldLogo.deploy();
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        await WeiGoldLogoDeployed.deployed();
      });

       describe("Test if:", function () {
         it("Owner has the token.", async function () {
           console.log( await WeiGoldLogoDeployed.ownerOf(4444) )
           expect( ( await WeiGoldLogoDeployed.ownerOf(4444) ) ).to.equal(owner.address);
         });
         it("Metadata animation is at the right Fleek storage location.", async function () {
           console.log( await WeiGoldLogoDeployed.tokenURI(4444) )
           expect( ( await WeiGoldLogoDeployed.tokenURI(4444) ) ).to.equal("https://storageapi.fleek.co/marcuswentz-team-bucket/WeiGold.gif");
         });
       });

});
