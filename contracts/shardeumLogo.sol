// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ERC721_Example is ERC721URIStorage {

    constructor() ERC721 ("shardeumLogo", "SL"){
        _safeMint(msg.sender, 1);
        _setTokenURI(1, "https://ipfs.fleek.co/ipfs/bafybeib6zcl5v5ojxkvmxnvpqrypq5yakmu2fd6y6wc3xo4n66pjelu7yq");
    }

}
