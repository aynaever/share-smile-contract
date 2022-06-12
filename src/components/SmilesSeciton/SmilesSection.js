import { Container, Heading, Button, Box } from "@chakra-ui/react";
import { getTotalSmiles, getSmiles } from "../../utils/connectToEthereum";
import { useEffect, useState } from "react";
import SmilesSectionCss from "./SmilesSection.css";

function Smiles(props) {
	const smiley = props.smiley;

	return (
		<Box	borderRadius='lg'
				borderWidth='1px'
				bg='orange.200'
				mb={5}>
				<Heading	as={'h2'}
							fontSize={40}>
					 {smiley.name.length === 0 ? "Anonym" : smiley.name}
				</Heading>
				<Heading	as={'h5'}
							fontSize={20}>
					{smiley.message.length === 0 ? "No message" : smiley.message}
				</Heading>
		</Box>
	);
}

function SmilesSection() {
	const [nsmiles, setNsmiles] = useState();
	const [smiles, setSmiles] = useState([]);
	const divSmiles = [];

	smiles.forEach( smile => {
		divSmiles.push(
				<Smiles smiley={smile}>
				</Smiles>);
	});

	useEffect(() => {
			(async () => {
				const num = await getTotalSmiles();
				setSmiles(await getSmiles());
				setNsmiles(num)})();
	}, []);

	return (
		<div className="smilesSection">
			<Container maxW="4xl">
				<Heading	pt={20}
							textAlign={'center'}
							noOfLines={2}>
						Happy Smiles from Happy People</Heading>
				<Heading>{nsmiles}</Heading>
				{divSmiles}
			</Container>
		</div>
	);
}

export default SmilesSection;
