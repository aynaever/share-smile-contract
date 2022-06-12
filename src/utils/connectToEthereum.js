import { ethers, providers } from "ethers";
import abi from "../ShareSmile.json";

export async function connectToEthereum() {
	const { ethereum } = window;

	const accounts = await ethereum.request({ method : "eth_requestAccounts" });
	console.log(accounts);
}

export async function isWalletConnected() {
	var provider = new ethers.providers.Web3Provider(window.ethereum);
	const accounts = await provider.listAccounts();
	return accounts.length > 0;
}

export async function sendSmile(name, message) {
	if (!isWalletConnected())
		connectToEthereum();
	try {
		const addressContract = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(addressContract, abi.abi, signer);
		await contract.addSmile(name, message);
		console.log(name, message);
	} catch (error) {
		alert('Sending smile failed, plz try again, don\'t loose hope');
	}
}

export async function getTotalSmiles() {
	if(!isWalletConnected())
		connectToEthereum();

	try {
		const addressContract = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(addressContract, abi.abi, signer);
		let totalSmiles = await contract.getTotalSmiles();
		console.log(totalSmiles.toNumber());
		return totalSmiles.toNumber();
	} catch (error) {
		console.log(error);
	}
}
