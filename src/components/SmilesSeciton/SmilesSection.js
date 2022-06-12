import { Container, Heading, Button } from "@chakra-ui/react";
import { getTotalSmiles, getSmiles } from "../../utils/connectToEthereum";
import { useEffect, useState } from "react";
import SmilesSectionCss from "./SmilesSection.css";

function SmilesSection() {
	const [nsmiles, setNsmiles] = useState();

	useEffect(() => {
			(async () => {
				const num = await getTotalSmiles();
				await getSmiles();
				setNsmiles(num)})();
	});

	return (
		<div className="smilesSection">
			<Container maxW="4xl">
				<Heading	pt={20}
							textAlign={'center'}
							noOfLines={2}>
						Happy Smiles from Happy People</Heading>
				<Heading>{nsmiles}</Heading>
			</Container>
		</div>
	);
}

export default SmilesSection;
