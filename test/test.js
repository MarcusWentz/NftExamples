const { expect } = require("chai");
const { ethers } = require("hardhat");
provider = ethers.provider;

describe("contract ERC721_Example tests:", function () {

      let ERC721_Example;
      let ERC721_ExampleDeployed;
      let owner;
      let addr1;
      let addr2;
      let addrs;

      beforeEach(async function () {

        ERC721_Example = await ethers.getContractFactory('ERC721_Example');
        ERC721_ExampleDeployed = await ERC721_Example.deploy();
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        await ERC721_ExampleDeployed.deployed();
      });

       describe("Test if:", function () {
         it("Owner has the token.", async function () {
           console.log( await ERC721_ExampleDeployed.ownerOf(4444) )
           expect( ( await ERC721_ExampleDeployed.ownerOf(4444) ) ).to.equal(owner.address);
         });
         it("Metadata animation is at the right Fleek storage location.", async function () {
           console.log( await ERC721_ExampleDeployed.tokenURI(4444) )
           expect( ( await ERC721_ExampleDeployed.tokenURI(4444) ) ).to.equal("https://storageapi.fleek.co/marcuswentz-team-bucket/WeiGold.gif");
         });
       });

});
