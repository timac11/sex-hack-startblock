const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const SHA256 = require("crypto-js/sha256");
const privateKey = "C87509A1C067BBDE78BEB793E6FA76530B6382A4C0241E5E4A9EC0A0F44DC0D3";
const infuraURL = "https://rinkeby.infura.io/v3/9fb08598f30a45bb96e7319c51925245";
const addr = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
const jsonInterface = require("./build/contracts/MedicalRegistry");;
const contractAddr = "0xE5EeFfbE5390570CA8c4dD8af191DA8f03eD8c08";

export async function verifyHash(information: any) {

    const web3 = new Web3(new HDWalletProvider(privateKey, infuraURL));
    const medicalRegistry = new web3.eth.Contract(jsonInterface.abi, contractAddr);
    const informationHash = SHA256(information).toString();

    const result = await medicalRegistry.methods.getEntryHash(addr).call({ from: addr });
    console.log(result);
    return informationHash === result[0];
}

export async function putInformation(information: any) {
    const web3 = new Web3(new HDWalletProvider(privateKey, infuraURL));
    const medicalRegistry = new web3.eth.Contract(jsonInterface.abi, contractAddr);

    const hash = SHA256(information).toString();
    const result = await medicalRegistry.methods.pushEntryHash(addr, hash).send({ from: addr });
    console.log(result);
}
