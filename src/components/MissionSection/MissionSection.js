import { Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MissionSectionCss from "./MissionSection.css";

function MissionSection() {
	return (
		<div className="missionSection">
			<motion.div	className="headingMission"
						initial={{ opacity : 0 }}
						animate={{ y : [-50, 0], scale : 1.1, opacity : [0.2, 0.5, 1] }}
						transition={{ ease : "easeOut", duration : 1.5 }}>
				<Heading	fontSize='3rem'
							as='h1'>
					What is our <span id="mission">Mission</span> ?
				</Heading>
			</motion.div>
			<motion.div	className="slang"
						initial={{ opacity : 0 }}
						animate={{ x : [50, 0], scale : 1.1, opacity : [0.2, 0.5, 1] }}
						transition={{ ease : "easeOut", duration : 2.5 }}>
				<Heading className="slang" fontSize='3rem'>
					We want to paint <span className="happySmiles">Happy
					<br />Smiles</span> on the Faces of
					<br />Everyone
					<br /><span className="hashtag">#EveryoneDeservesSmile</span>
				</Heading>
			</motion.div>
			<motion.div	className="image"
						initial={{ opacity : 0 }}
						animate={{ x : [-50, 0], scale : 1, opacity : [0.2, 0.5, 1] }}
						transition={{ ease : "easeOut", duration : 2.5 }}>
				<Image className="image" src="/OurMission.png" />
			</motion.div>
		</div>
	);
}

export default MissionSection;
