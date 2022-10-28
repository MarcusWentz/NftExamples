// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Leaderboard is ERC1155 { //ERC1155 cannot also be a ERC1155Holder for having tokens ERC1155 tokens sent to it. 

    uint public leaderboardTokenId;
    uint public balanceOfAddressWithTheMostTokens;
    address public addressWithMostTokens;
    mapping(address => uint) public leaderboardUserBest;
    mapping(address => uint) public leaderboardBalanceOf; //Acts as a global balanceOf for a wallet like an ERC-721 token.

    constructor() ERC1155("") { } 

    function mintNewLeaderBoardToken() public {
        leaderboardTokenId = 1 + leaderboardTokenId;
        leaderboardBalanceOf[msg.sender] = 1 + leaderboardBalanceOf[msg.sender]; 
        if(leaderboardBalanceOf[msg.sender] > balanceOfAddressWithTheMostTokens){
            addressWithMostTokens = msg.sender;
            balanceOfAddressWithTheMostTokens = leaderboardBalanceOf[msg.sender];
        }
        if(leaderboardUserBest[msg.sender] == 0){
            leaderboardUserBest[msg.sender] = leaderboardTokenId; 
        }
        _mint(msg.sender, leaderboardTokenId, 1, ""); //Only 1 token per tokenId, acting like an NFT ERC-721 token.
    }
}
