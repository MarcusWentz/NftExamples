// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Leaderboard is ERC1155 { //ERC1155 cannot also be a ERC1155Holder for having tokens ERC1155 tokens sent to it. 

    uint public leaderboardTokenId;
    mapping(address => uint) public leaderboardUserBest;
    mapping(address => uint) public leaderboardWalletFrequency; //Acts as a global balanceOf for a wallet like an ERC-721 token.

    constructor() ERC1155("") { } 

    function a() public {
        leaderboardTokenId = 1 + leaderboardTokenId;
        leaderboardWalletFrequency[msg.sender] = 1 + leaderboardWalletFrequency[msg.sender]; 
        if(leaderboardUserBest[msg.sender] == 0){
            leaderboardUserBest[msg.sender] = leaderboardTokenId; 
        }
        _mint(msg.sender, leaderboardTokenId, 1, "");
    }
}
