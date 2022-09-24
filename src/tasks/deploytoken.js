const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const testtokenContractFactory = await hre.ethers.getContractFactory('ERC20');
    const testtokenContract = await testtokenContractFactory.deploy();
    await testtokenContract.deployed();
    console.log("Contract deployed to:", testtokenContract.address);
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