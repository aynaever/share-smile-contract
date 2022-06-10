import NavbarCss from './Navbar.css';
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
			<Button className="button" colorScheme="orange" size="md">Connect</Button>
		</div>
	);
}

export default Navbar;
