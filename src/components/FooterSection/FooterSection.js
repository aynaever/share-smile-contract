import FooterCss from "./FooterSection.css";
import { Heading } from "@chakra-ui/react";

function FooterSection() {
	return (
		<div className="footer">
			<Heading	as="h5"
						size="md"
						color="white">
				" Share Smile In The Blockain " Made By Aymane With 💓
			</Heading>
		</div>
	);
}

export default FooterSection;
