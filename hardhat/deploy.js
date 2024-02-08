

async function main() {

    const MyContract = await hre.ethers.getContractFactory("MyContract");
    const MyContractDeployed = await MyContract.deploy("deployed contract", 'MCN');
    await MyContractDeployed.deployed();
    console.log('deploy MyContract to:', MyContractDeployed.address);
  }

  main()
   .then(()=> process.exit(0))
   .catch((error) => {
    console.error(error);
    process.exit(1);
   });
