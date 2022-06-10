import { Heading, Image } from "@chakra-ui/react";
import MissionSectionCss from "./MissionSection.css";

function MissionSection() {
	return (
		<div className="missionSection">
			<Heading className="headingMission" fontSize='3rem' as='h1'>
				What is our <span id="mission">Mission</span> ?
			</Heading>
			<Heading className="slang" fontSize='3rem'>
				We want to paint <span className="happySmiles">Happy
				<br />Smiles</span> on the Faces of
				<br />Everyone
				<br /><span className="hashtag">#EveryoneDeservesSmile</span>
			</Heading>
			<Image className="image" src="/OurMission.png" />
		</div>
	);
}

export default MissionSection;
