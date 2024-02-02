// https://ethereum.org/developers/docs/standards/tokens/erc-20
// All the above functions are in the above link, but we n eed just the decimal one
const erc20ABI = ["function decimals() public view returns (uint8)"];

const factoryABI = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair)",
]; //It will return the address of the liquidity Provider Contract

const routerABI = [
  "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)",
];

module.exports = { erc20ABI, factoryABI, routerABI };
