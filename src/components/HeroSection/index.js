import CallToAction from "./CallToAction/CallToAction";
import Heading from "./Heading/Heading";
import { Image } from "@chakra-ui/react";
import IndexCss from "./index.css";

function HeroSection() {
	return (
		<div className="heroSection">
			<Heading />
			<CallToAction />
			<Image src="/HeroImage.png" />
		</div>
	);
}

export default HeroSection;
