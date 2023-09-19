async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const WeiGoldLogo = await ethers.getContractFactory("WeiGoldLogo");
  const WeiGoldLogoDeployed = await WeiGoldLogo.deploy();

  console.log("Token address:", WeiGoldLogoDeployed.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

