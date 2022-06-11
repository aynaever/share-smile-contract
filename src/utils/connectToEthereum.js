import { ethers } from "ethers";

export async function connectToEthereum() {
	const { ethereum } = window;

	const accounts = await ethereum.request({ method : "eth_requestAccounts" });
	console.log(accounts);
}

export async function isWalletConnected() {
	var provider = new ethers.providers.Web3Provider(window.ethereum);
	const accounts = await provider.listAccounts();
	console.log(accounts);
	console.log(accounts.length > 0);
	return accounts.length > 0;
}
