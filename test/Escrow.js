const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether');
};

describe('Escrow', () => {
    it('saves the addresses', async () => {
        const RealEstate = await ethers.getContractFactory('RealEstate');
        const realEstate = await RealEstate.deploy();
        await realEstate.deployed();

       let buyer , seller, inspector, lender
     
        
       [buyer, seller,inspector, lender] = await ethers.getSigners()


        // Assert that the contract address is set and is a valid address
        expect(realEstate.address).to.be.properAddress;

       //mint
    let transaction = await realEstate.connect(seller).mint("https://ipfs.io/ipfs/QmQvcpjrA6cr1iJjAZodYwmPekYgbnXGo4DFubJiLc2EB/1.json")
     await transaction.wait()

     const Escrow = await ethers.getContractFactory('Escrow')
     escrow = await Escrow.deploy(
        realEstate.address,
        seller.address,
        inspector.address,
        lender.address
        )
    });
});
