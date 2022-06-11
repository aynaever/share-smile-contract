import NavbarCss from './Navbar.css';
import { connectToEthereum, isWalletConnected } from '../../utils/connectToEthereum.js';
import { motion } from "framer-motion";
import { Button, Link } from '@chakra-ui/react';
import { useState, useEffect } from "react";

function Navbar() {

	const [isConnected, setIsConnected] = useState(false);

	return (
		<div className="navbar">
			<ul>
				<Link>Home</Link>
				<Link>Smiles</Link>
				<Button colorScheme="orange" size="md">Smile Now</Button>
				<Link>About</Link>
			</ul>
			<img src="/Logo.png" />
			<motion.div className="button" whileHover={{ scale: 1.1 }}>
				<Button	className="button"
						colorScheme="orange"
						isDisabled={ isConnected }
						size="md"
						onClick={async () => {
								if (!isConnected) {
									await connectToEthereum();
									setIsConnected(true);
								}
								}}>
					{ isConnected ? "Connected" : "Connect" }</Button>
			</motion.div>
		</div>
	);
}

export default Navbar;
