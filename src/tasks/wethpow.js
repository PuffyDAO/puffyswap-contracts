const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const swapContractFactory = await hre.ethers.getContractFactory('WETH9');
    const swapContract = await swapContractFactory.deploy();
    await swapContract.deployed();
    console.log("Contract deployed to:", swapContract.address);
    console.log("Contract deployed by:", owner.address);
    
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();