const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const routerContractFactory = await hre.ethers.getContractFactory('UniswapV2Router');
    const routerContract = await routerContractFactory.deploy("0xFcEc44Adb7aeB7a464B0aB0a8F6077AFE36aA4D9" , "0xce7726e4175240F4289F953Ea6Ccf854e429f2C1");
    await routerContract.deployed();
    console.log("Contract deployed to:", routerContract.address);
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