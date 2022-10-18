// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

error invalidFruitIdNumber(); 

contract FruitStore is ERC1155 {

    uint public constant Apple = 0; //"constant" can never change. 
    uint public constant Banana = 1;
    uint public constant Pitaya = 2;
    uint public constant Guava = 3;
    uint public constant Watermelon = 4;
    uint public constant Raspberry = 5;
    uint public constant Blueberry = 6;
    uint public constant Avacado = 7;
    uint public immutable ExtraFruitId; //"immutable" can only be changed in the constructor.

    constructor(uint extraFruitIdPick) public ERC1155("https://en.wikipedia.org/wiki/{name}") {
        if(extraFruitIdPick > 7) { revert invalidFruitIdNumber(); } //Don't check for negative since uint must be 0 or positive.
        ExtraFruitId = extraFruitIdPick; //"immutable" can only be changed in the constructor.
        _mint(msg.sender, Apple,        100*(1 ether), "");
        _mint(msg.sender, Banana,       100*(1 ether), "");
        _mint(msg.sender, Pitaya,       100*(1 ether), "");
        _mint(msg.sender, Guava,        100*(1 ether), "");
        _mint(msg.sender, Watermelon,   100*(1 ether), "");
        _mint(msg.sender, Raspberry,    100*(1 ether), "");
        _mint(msg.sender, Blueberry,    100*(1 ether), "");
        _mint(msg.sender, Avacado,      100*(1 ether), "");
        _mint(msg.sender, ExtraFruitId, 100*(1 ether), "");
    }
}
