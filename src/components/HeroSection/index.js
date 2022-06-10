import CallToAction from "./CallToAction/CallToAction";
import Heading from "./Heading/Heading";
import { Image } from "@chakra-ui/react";
import IndexCss from "./index.css";

function HeroSection() {
	return (
		<div className="heroSection">
			<Heading className="heading"/>
			<CallToAction className="CallToAction"/>
			<Image src="/HeroImage.png" className="image"/>
		</div>
	);
}

export default HeroSection;
