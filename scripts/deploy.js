async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC721_Example = await ethers.getContractFactory("ERC721_Example");
  const ERC721_ExampleDeployed = await ERC721_Example.deploy();

  console.log("Token address:", ERC721_ExampleDeployed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

