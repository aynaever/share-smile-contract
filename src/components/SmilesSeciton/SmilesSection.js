import { Container, Heading, Button } from "@chakra-ui/react";
import { getTotalSmiles, getSmiles } from "../../utils/connectToEthereum";
import { useEffect, useState } from "react";
import SmilesSectionCss from "./SmilesSection.css";

function SmilesSection() {
	const [nsmiles, setNsmiles] = useState();
	const [smiles, setSmiles] = useState([]);
	const divSmiles = [];

	smiles.forEach( smile => {
		divSmiles.push(
				<div>
					<Heading as={'h2'}>
						{smile.name.length === 0 ? "Anonym" : smile.name}
					</Heading>
					<Heading as={'h3'}>
						{smile.message.length === 0 ? "No message" : smile.message}
					</Heading>
				</div>);
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
