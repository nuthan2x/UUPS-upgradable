require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

module.exports = {
 solidity: "0.8.10",
 networks: {
   goerli: {
     url: `https://rpc.ankr.com/eth_goerli`,
     accounts: [process.env.PRIVATE_KEY],
   },
   
   sepolia: {
     url: `https://rpc.sepolia.org`,
     accounts: [process.env.PRIVATE_KEY],
   },
 },
 etherscan: {
   apiKey: process.env.ETHERSCAN_API_KEY,
 },
};