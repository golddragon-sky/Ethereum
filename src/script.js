import ethers from 'ethers';
const provider = ethers.getDefaultProvider();

const main = async () => {
    const balance = await provider.getBalance(`vitalic.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)}ETH`);
}

main()