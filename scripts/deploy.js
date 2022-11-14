const hre = require("hardhat");

async function main() {
  const MineNFT = await hre.ethers.getContractFactory("MineNFT");
  const mineNFT = await MineNFT.deploy();

  await mineNFT.deployed();

  console.log("MineNFT deployed to:", mineNFT.address);
  storeContractData(mineNFT);
}

function storeContractData(contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/MineNFT-address.json",
    JSON.stringify({ MineNFT: contract.address }, undefined, 2)
  );

  const MineNFTArtifact = artifacts.readArtifactSync("MineNFT");

  fs.writeFileSync(
    contractsDir + "/MineNFT.json",
    JSON.stringify(MineNFTArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });