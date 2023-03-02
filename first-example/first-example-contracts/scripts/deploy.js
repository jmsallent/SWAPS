const hre = require("hardhat");

async function main() {
  const MyDefiContractFactory = await hre.ethers.getContractFactory(
    "MyDefiContract"
  );
  const lock = await MyDefiContractFactory.deploy(unlockTime, {
    value: lockedAmount,
  });

  await lock.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
