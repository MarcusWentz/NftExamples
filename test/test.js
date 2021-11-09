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
         it("Owner has the token.", async function () {
           console.log( await ERC721_ExampleDeployed.tokenURI(4444) )
           expect( ( await ERC721_ExampleDeployed.tokenURI(4444) ) ).to.equal("https://storageapi.fleek.co/marcuswentz-team-bucket/WeiGold.gif");
         });
       });
//
//        describe("getLatest_WEI_Gold_Price() is 400000000000000000 by default.", function () {
//          it("See if equal", async function () {
//            expect( (await MockWeiGoldDeployed.getLatest_WEI_Gold_Price()).toString() ).to.equal('400000000000000000');
//          });
//          it("See if value doubles when Scale_fee=1000.", async function () {
//            await expect( MockWeiGoldDeployed.OwnerChangeScaleFee(1000))
//            expect( (await MockWeiGoldDeployed.getLatest_WEI_Gold_Price()).toString() ).to.equal('800000000000000000');
//          });
//        });
//
//        describe("getLatest_WEI_Silver_Price() is 5000000000000000 by default.", function () {
//          it("See if equal", async function () {
//            expect( (await MockWeiGoldDeployed.getLatest_WEI_Silver_Price()).toString() ).to.equal('5000000000000000');
//          });
//          it("See if value doubles when Scale_fee=1000.", async function () {
//            await expect( MockWeiGoldDeployed.OwnerChangeScaleFee(1000))
//            expect( (await MockWeiGoldDeployed.getLatest_WEI_Silver_Price()).toString() ).to.equal('10000000000000000');
//          });
//        });
//
//        describe("getLatest_WEI_Oil_Price() is 20000000000000000 by default.", function () {
//          it("See if equal", async function () {
//            expect( (await MockWeiGoldDeployed.getLatest_WEI_Oil_Price()).toString() ).to.equal('20000000000000000');
//          });
//          it("See if value doubles when Scale_fee=1000.", async function () {
//            await expect( MockWeiGoldDeployed.OwnerChangeScaleFee(1000))
//            expect( (await MockWeiGoldDeployed.getLatest_WEI_Oil_Price()).toString() ).to.equal('40000000000000000');
//          });
//        });
//
//       describe("BuyGold", function () {
//         it("Fail tx if msg.value = 0.", async function () {
//         await expect(MockWeiGoldDeployed.BuyGold()).to.be.reverted;
//         });
//         it("Fail tx if Gold sold already [ScaleFee_State = 4].", async function () {
//                 // console.log( await MockWeiGoldDeployed.getLatest_WEI_Gold_Price()).toString() ;
//                 await MockWeiGoldDeployed.BuyGold({ value: ethers.utils.parseEther( ('0.4') )  } )
//                 await expect( MockWeiGoldDeployed.BuyGold({ value: ethers.utils.parseEther( ('0.4') )  } )   ).to.be.revertedWith('Gold is sold out already!');//'With("");
//         });
//         it("Send correct msg.value and see if event gets state change [ScaleFee_State = 4].", async function () {
//
//                 await expect( MockWeiGoldDeployed.BuyGold({ value: ethers.utils.parseEther( ('0.4') )  } )   )
//                 .to.emit(MockWeiGoldDeployed, "ScaleFee_StateChangeEvent")
//                 .withArgs(owner.address, 4);
//         });
//       });
//
//       describe("BuySilver", function () {
//         it("Fail tx if msg.value = 0.", async function () {
//                 await expect(MockWeiGoldDeployed.BuySilver()).to.be.reverted;
//         });
//         it("Fail tx if Silver sold already [ScaleFee_State = 2].", async function () {
//                 // console.log( await MockWeiGoldDeployed.getLatest_WEI_Silver_Price()).toString(10) ;
//                 await MockWeiGoldDeployed.BuySilver({ value: ethers.utils.parseEther( ('0.005') )  } )
//                 await expect( MockWeiGoldDeployed.BuySilver({ value: ethers.utils.parseEther( ('0.005') )  } )   ).to.be.revertedWith('Silver is sold out already!');//'With("");
//         });
//         it("Send correct msg.value and see if event gets state change [ScaleFee_State = 2].", async function () {
//
//                 await expect( MockWeiGoldDeployed.BuySilver({ value: ethers.utils.parseEther( ('0.005') )  } )   )
//                 .to.emit(MockWeiGoldDeployed, "ScaleFee_StateChangeEvent")
//                 .withArgs(owner.address, 2);
//         });
//       });
//
//       describe("BuyOil", function () {
//         it("Fail tx if msg.value = 0.", async function () {
//                 await expect(MockWeiGoldDeployed.BuyOil()).to.be.reverted;
//         });
//         it("Fail tx if Oil sold already [ScaleFee_State = 1].", async function () {
//                 // console.log( await MockWeiGoldDeployed.getLatest_WEI_Oil_Price()).toString() ;
//                 await MockWeiGoldDeployed.BuyOil({ value: ethers.utils.parseEther( ('0.02') )  } )
//                 await expect( MockWeiGoldDeployed.BuyOil({ value: ethers.utils.parseEther( ('0.02') )  } )   ).to.be.revertedWith('Oil is sold out already!');//'With("");
//         });
//         it("Send correct msg.value and see if event gets state change [ScaleFee_State = 1].", async function () {
//                 await expect( MockWeiGoldDeployed.BuyOil({ value: ethers.utils.parseEther( ('0.02') )  } )   )
//                 .to.emit(MockWeiGoldDeployed, "ScaleFee_StateChangeEvent")
//                 .withArgs(owner.address, 1);
//         });
//       });
//
//       describe("OwnerChangeScaleFee", function () {
//           it("Fail tx if Owner address is not used for tx.", async function () {
//             await expect(MockWeiGoldDeployed.connect(addr2).OwnerChangeScaleFee(7)).to.be.revertedWith('Only contract owner (deployer) can access this function.');
//           });
//           it("Fail tx if input matches Scale_Fee already.", async function () {
//             await expect(MockWeiGoldDeployed.OwnerChangeScaleFee(0)).to.be.revertedWith('Input value is already the same as Scale_Fee!');
//           });
//           it("Test if updating Scale_Fee = 1000 is 8000.", async function () {
//             await expect( MockWeiGoldDeployed.OwnerChangeScaleFee(1000))
//             .to.emit(MockWeiGoldDeployed, "ScaleFee_StateChangeEvent")
//             .withArgs(owner.address, 8000);
//           });
//       });

});
