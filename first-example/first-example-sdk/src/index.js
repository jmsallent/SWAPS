import { ChainId, Fetcher, Route, WETH, Token } from "@uniswap/sdk";
const chainId = ChainId.MAINNET;
const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const wethAddress = WETH[chainId];

const init = async () => {
  const daiData = await Fetcher.fetchTokenData(chainId, daiAddress);
  const DAI = new Token(
    ChainId.MAINNET,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    daiData.decimals
  );
  const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);

  const route = new Route([pair], WETH[DAI.chainId]);
  console.log(route.midPrice.toSignificant(6)); // 201.306
  console.log(route.midPrice.invert().toSignificant(6)); // 0.00496756
};

init();
