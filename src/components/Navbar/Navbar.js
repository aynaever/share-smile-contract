import NavbarCss from './Navbar.css';
import { connectToEthereum, isWalletConnected } from '../../utils/connectToEthereum.js';
import { motion } from "framer-motion";
import { Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		(async () => {
			setIsConnected(await isWalletConnected());
		})();
	});

	return (
		<div className="navbar">
			<ul>
				<Link as={RouterLink} to="/">Home</Link>
				<Link as={RouterLink} to="/smiles">Smiles</Link>
				<Link as={RouterLink} to="/smile-now">
					<Button colorScheme="orange" size="md">Smile Now</Button>
				</Link>
				<Link as={RouterLink} to="/about">About</Link>
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
