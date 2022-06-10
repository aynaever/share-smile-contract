import { Heading as HeadingChakra} from '@chakra-ui/react';
import { Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import IndexCss from "./index.css";

function HeroSection() {
	return (
		<div className="heroSection">
			<motion.div
				animate={{x: 100, scale: 1}}
				transition={{ type: "tween", duration: 2}}
				initial={{ scale: 0}}
				className="division">
				<HeadingChakra
					as="h1"
					fontSize='5rem'
					noOfLines={4} size="3xl"
					className="slang">
					Share <HeadingChakra className="love" fontSize='8rem' size="4xl" as="h1">Love</HeadingChakra>
					<br />Now in the <br />
					Blockchain
					<br />
				</HeadingChakra>
				<motion.div whileHover={{ scale: 1.3 }}>
					<Button className="cta" colorScheme="orange" size="lg">Sm😁le Now</Button>
				</motion.div>
			</motion.div>
			<motion.div
				animate={{ scale : 1, rotate: 0}}
				transition={{ type: "tween", duration: 1}}
				initial={{ scale : 2 }}
				className="image">
				<Image src="/HeroImage.png" className="image"/>
			</motion.div>
		</div>
	);
}

export default HeroSection;
