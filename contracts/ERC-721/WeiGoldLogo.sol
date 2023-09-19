// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract ERC721_Example is ERC721URIStorage {
    constructor() ERC721 ("WeiGold", "WG"){
    _safeMint(msg.sender, 4444);
    _setTokenURI(4444, "https://storageapi.fleek.co/marcuswentz-team-bucket/WeiGold.gif");
    }

}
