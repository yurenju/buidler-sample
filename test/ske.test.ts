import { use, expect } from "chai";
import { ethers } from "@nomiclabs/buidler";
import { Wallet } from "ethers";
import { solidity, deployContract } from "ethereum-waffle";
import SKETokenArtifact from "../artifacts/SKEToken.json";
import { SKEToken } from "../types/ethers-contracts/SKEToken";

use(solidity);

describe("Counter smart contract", () => {
  let address: string;

  async function deployToken(initialValue: string) {
    const [signer] = await ethers.signers();
    address = await signer.getAddress();
    const wallet = <Wallet>signer;
    const token = (await deployContract(wallet, SKETokenArtifact, [
      initialValue
    ])) as SKEToken;
    return token;
  }

  it("sets initial balance in the constructor", async () => {
    const token = await deployToken("10000");
    expect(await token.balanceOf(address)).to.equal("10000");
  });
});
