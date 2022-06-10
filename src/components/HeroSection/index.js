import { Heading as HeadingChakra} from '@chakra-ui/react';
import { Image, Button } from "@chakra-ui/react";
import IndexCss from "./index.css";

function HeroSection() {
	return (
		<div className="heroSection">
			<div className="division">
				<HeadingChakra as="h1" noOfLines={4} size="3xl" className="slang">
					Share <HeadingChakra className="love" size="4xl" as="h1">Love</HeadingChakra>
					<br />Now in the <br />
					Blockchain
					<br />
				</HeadingChakra>
				<Button className="cta" colorScheme="orange">Sm😁le Now</Button>
			</div>
			<Image src="/HeroImage.png" className="image"/>
		</div>
	);
}

export default HeroSection;
