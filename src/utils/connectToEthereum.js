import { ethers } from "ethers";

export async function connectToEthereum() {
	const { ethereum } = window;

	const accounts = await ethereum.request({ method : "eth_requestAccounts" });
	console.log(accounts);
}
