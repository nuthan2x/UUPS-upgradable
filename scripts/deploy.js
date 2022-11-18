
const hre = require("hardhat");

async function main() {
 


  const PizzaV3 = await hre.ethers.getContractFactory("PizzaV3");
  const pizzaV3 = await PizzaV3.deploy();

  await pizzaV3.deployed();

  console.log(
    `PizzaV3 deployed to ${pizzaV3.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
