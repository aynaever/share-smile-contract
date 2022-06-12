import { Container, Heading, Button } from "@chakra-ui/react";
import { getTotalSmiles } from "../../utils/connectToEthereum";
import { useEffect, useState } from "react";
import SmilesSectionCss from "./SmilesSection.css";

function SmilesSection() {
	const [nsmiles, setNsmiles] = useState();

	useEffect(() => {
			(async () => {
				const num = await getTotalSmiles();
				setNsmiles(num)})();
	});

	return (
		<div className="smilesSection">
			<Container maxW="4xl">
				<Heading	pt={20}
							noOfLines={2}>
						This Page is under construction!Soon will be live!</Heading>
				<Heading>{nsmiles}</Heading>
				<Button>
					get Number of Smiles
				</Button>
			</Container>
		</div>
	);
}

export default SmilesSection;
