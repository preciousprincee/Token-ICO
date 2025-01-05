// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// contract TheBlockchainCoders is ERC20 {
//     constructor() ERC20("TheBlockchainCoders", "@TBC"){
//         _mint(msg.sender, 1000000000000000000000000);
//     }
// }



pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TheBlockchainCoders is ERC20 {
    constructor() ERC20("TheBlockchainCoders", "@TBC") {
        // Mint 1,000,000 tokens (adjusted for 18 decimals)
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
