// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

error onlyOwner();

contract ShardeumLogoNFT is ERC721URIStorage {

  constructor() ERC721 ("shardeumLogo", "SL"){
    _safeMint(msg.sender, 1); //Mint NFT with tokenId = 1.
    _setTokenURI(1, "bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq"); //For tokenId = 1, set IPFS CID for image data.
  }

}

contract SendAndRecoverERC721 is ERC721URIStorage  { 

    address public immutable Owner;
    ShardeumLogoNFT public immutable instance;

    constructor(address deployedAddress) ERC721 ("shardeumLogo", "SL") {
        Owner = msg.sender;
        instance = ShardeumLogoNFT(deployedAddress);
    }

    function sendBackTokenToWallet(uint tokenId) public {
        if(msg.sender != Owner) { revert onlyOwner(); }
        instance.transferFrom(address(this),msg.sender,tokenId);
    }
}
