// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

error invalidFruitIdNumber(); 

contract FruitStore is ERC1155 { //ERC1155 cannot also be a ERC1155Holder for having tokens ERC1155 tokens sent to it. 

    uint public constant Raspberry = 0; // "constant" and "immutable" variables don't use storage slots, which saves gas.
    uint public constant Watermelon = 1; // "constant" variables can never change.
    uint public constant Blueberry = 2;
    uint public constant Avacado = 3;
    uint public constant Guava = 4;
    uint public constant Pitaya = 5;
    uint public constant Apple = 6; 
    uint public constant Banana = 7;
    uint public immutable ExtraFruitId; //"immutable" can only be changed in the constructor.

    constructor(uint extraFruitIdPick) public ERC1155("https://en.wikipedia.org/wiki/{name}") { //When using safeTransferFrom, have data as 0x00.
        if(extraFruitIdPick > 7) { revert invalidFruitIdNumber(); } //Don't check for negative since uint must be 0 or positive.
        ExtraFruitId = extraFruitIdPick; //"immutable" can only be changed in the constructor.
        _mint(msg.sender, Raspberry,    100*(1 ether), "");
        _mint(msg.sender, Watermelon,   100*(1 ether), "");
        _mint(msg.sender, Blueberry,    100*(1 ether), "");
        _mint(msg.sender, Avacado,      100*(1 ether), "");
        _mint(msg.sender, Guava,        100*(1 ether), "");
        _mint(msg.sender, Pitaya,       100*(1 ether), "");
        _mint(msg.sender, Apple,        100*(1 ether), ""); 
        _mint(msg.sender, Banana,       100*(1 ether), "");
        _mint(msg.sender, ExtraFruitId, 100*(1 ether), "");
    }

}

contract BurnTokensERC1155 is ERC1155Holder {
    //Send tokens to me to burn fruit.
}
