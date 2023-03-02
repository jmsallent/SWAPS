// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20 {
    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);
}

interface IUniswap {
    function swapExactTokensForETH(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);
}

contract MyDefiContract {
    IERC20 token;
    IUniswap uniswap;

    constructor(address _tokenAddress, address _uniSwap) {
        token = IERC20(_tokenAddress);
        uniswap = IUniswap(_uniSwap);
    }

    function swapToken(uint256 amountIn) public {
        bool transferFromTokenResult = token.transferFrom(
            msg.sender,
            address(this),
            amountIn
        );
        require(transferFromTokenResult, "could not get your token!");
        token.approve(address(uniswap), amountIn);
        // uniswap.swapExactTokensForETH(amountIn, 0, path, to, deadline);
    }
}
