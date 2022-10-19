// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ShardeumLogoNFT is ERC721URIStorage {

  constructor() ERC721 ("shardeumLogo", "SL"){
    _safeMint(msg.sender, 1); //Mint NFT with tokenId = 1.
    _setTokenURI(1, "bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq"); //For tokenId = 1, set IPFS CID for image data.
  }

}
