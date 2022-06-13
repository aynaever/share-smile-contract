import { Container, Heading, Button, Box } from "@chakra-ui/react";
import { getTotalSmiles, getSmiles } from "../../utils/connectToEthereum";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SmilesSectionCss from "./SmilesSection.css";

function Smiles(props) {
	const smiley = props.smiley;
	const sign = props.index % 2 === 0 ? 1 : -1;

	return (
		<motion.div	whileHover={{ scale : 1.2 }}
					initial={{ opacity : 0 }}
					animate={{ x : [sign * 100, 0], opacity : 1, duration : 2 }}
					>
			<Box	borderRadius='lg'
					borderWidth='1px'
					bg='orange.200'
					p={3}
					mb={5}>
					<Heading	as={'h2'}
								fontWeight={40}
								fontSize={40}>
					 	 {smiley.name.length === 0 ? "Anonym" : smiley.name}
					</Heading>
					<Heading	as={'h5'}
								fontWeight={12}
								fontSize={17}>
						{smiley.message.length === 0 ? "No message" : smiley.message}
					</Heading>
			</Box>
		</motion.div>
	);
}

function SmilesSection() {
	const [nsmiles, setNsmiles] = useState();
	const [smiles, setSmiles] = useState([]);
	const divSmiles = [];

	smiles.forEach( (smile, index) => {
		divSmiles.push(
				<Smiles smiley={smile} index={index}>
				</Smiles>);
	});

	useEffect(() => {
			try {
				(async () => {
					const num = await getTotalSmiles();
					const arraySmiles = await getSmiles();
					setSmiles(arraySmiles);
					setNsmiles(num)})();
			} catch (error) {
				console.log(error);
			}
	}, []);

	return (
		<div className="smilesSection">
			<Container maxW="6xl">
				<Heading	pt={20}
							fontSize={50}
							textAlign={'center'}
							mb={20}
							noOfLines={2}>
					<span className="nSmiles">{nsmiles} </span>
					Happy <span className="smiles">Smiles </span>
					from <span className="happy">Happy</span> People</Heading>
				{divSmiles}
			</Container>
		</div>
	);
}

export default SmilesSection;
