import { Heading, Image } from "@chakra-ui/react";
import MissionSectionCss from "./MissionSection.css";

function MissionSection() {
	return (
		<div className="missionSection">
			<Heading>
				What is our <span id="mission">Mission</span> ?
			</Heading>
			<Heading>
				We want to paint Happy
				<br />Smiles on the Faces of
				<br />Everyone
				<br />#EveryoneDeservesSmile
			</Heading>
			<Image src="/OurMission.png" />
		</div>
	);
}

export default MissionSection;
