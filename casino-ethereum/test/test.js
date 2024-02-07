
const { expect } = require("chai");
// const { ethers } = require("hardhat");

describe("Casino", function () {
  it("Should return correct name", async function () {
    const Casino = await hre.ethers.getContractFactory("Casino");
    const CasinoDeployed = await Casino.deploy("deployed contract", 'CSN');
    await CasinoDeployed.deployed();

    expect(await CasinoDeployed.name()).to.equal("deployed contract");
  });
});