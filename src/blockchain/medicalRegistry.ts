const Web3 = require('web3');
const SHA256 = require("crypto-js/sha256");
const addr = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";
const jsonInterface = require("./build/contracts/MedicalRegistry");
const contractAddr = "0xE5EeFfbE5390570CA8c4dD8af191DA8f03eD8c08";

export async function verifyHash(information: any) {
    await (window as any).ethereum.enable();
    const web3 = new Web3((window as any).ethereum);
    const medicalRegistry = new web3.eth.Contract(jsonInterface.abi, contractAddr);
    const informationHash = SHA256(information).toString();
    const result = await medicalRegistry.methods.getEntryHash(addr).call({ from: addr });
    console.log(result);
    return informationHash === result[0];
}

export async function putInformation(information: any) {
    await (window as any).ethereum.enable();
    const web3 = new Web3((window as any).ethereum);
    const medicalRegistry = new web3.eth.Contract(jsonInterface.abi, contractAddr);
    const accounts= await web3.eth.getAccounts();
    const option={from: accounts[0] };
    const hash = SHA256(information).toString();
    console.log(hash);
    const result = await medicalRegistry.methods.pushEntryHash(addr, hash).send(option);
    console.log(result);
}
