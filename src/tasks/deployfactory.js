const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const swapContractFactory = await hre.ethers.getContractFactory('UniswapV2Factory');
    const swapContract = await swapContractFactory.deploy(owner.address);
    await swapContract.deployed();
    console.log("Contract deployed to:", swapContract.address);
    console.log("Contract deployed by:", owner.address);
    //remember to setfeeto
    
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