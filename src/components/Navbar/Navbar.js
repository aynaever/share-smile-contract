import NavbarCss from './Navbar.css';
import { connectToEthereum } from '../../utils/connectToEthereum.js';
import { motion } from "framer-motion";
import { Button, Link } from '@chakra-ui/react';

function Navbar() {
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
						size="md"
						onClick={async () => {
									await connectToEthereum();}}>Connect</Button>
			</motion.div>
		</div>
	);
}

export default Navbar;
