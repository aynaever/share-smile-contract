import { Container, Heading, Button } from "@chakra-ui/react";
import { getTotalSmiles } from "../../utils/connectToEthereum";
import { useState } from "react";
import SmilesSectionCss from "./SmilesSection.css";

function SmilesSection() {
	const [nsmiles, setNsmiles] = useState(0);

	return (
		<div className="smilesSection">
			<Container maxW="4xl">
				<Heading	pt={20}
							noOfLines={2}>
						This Page is under construction!Soon will be live!</Heading>
				<Heading>{nsmiles}</Heading>
				<Button onClick={async () => {
						setNsmiles(await getTotalSmiles());
					}}>
					get Number of Smiles
				</Button>
			</Container>
		</div>
	);
}

export default SmilesSection;
