const ethers = require("ethers");
const {
  factoryContract,
  routerContract,
  fromAddress,
  toAddress,
} = require("./AddressList");
const { erc20ABI, factoryABI, routerABI } = require("./ABIInfo");

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org/"
);

const factoryInstance = new ethers.Contract(
  factoryContract,
  factoryABI,
  provider
);

const routerInstance = new ethers.Contract(routerContract, routerABI, provider);

const priceFetch = async (amount) => {
  const token1 = new ethers.Contract(fromAddress, erc20ABI, provider);
  const token2 = new ethers.Contract(toAddress, erc20ABI, provider);
  const decimal1 = await token1.decimals();
  const decimal2 = await token2.decimals();
  const amountIn = ethers.utils.parseUnits(amount, decimal1).toString();
  const amountOut = await routerInstance.getAmountsOut(amountIn, [
    fromAddress,
    toAddress,
  ]);
  const humanReadableAmount = ethers.utils.formatUnits(
    amountOut[1].toString(),
    decimal2
  );
  console.log(
    `For ${amount} of BUSD Token, you can get ${humanReadableAmount} of WBNB`
  );
};

priceFetch("1");
