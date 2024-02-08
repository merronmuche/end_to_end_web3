
const { expect } = require("chai");
// const { ethers } = require("hardhat");

describe("MyContract", function () {
  it("Should return correct name", async function () {
    const MyContract = await hre.ethers.getContractFactory("MyContract");
    const MyContractDeployed = await MyContract.deploy("deployed contract", 'MCN');
    await MyContractDeployed.deployed();

    expect(await MyContractDeployed.name()).to.equal("deployed contract");
  });
});