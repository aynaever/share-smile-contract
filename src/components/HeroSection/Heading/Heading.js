import { Heading as HeadingChakra} from '@chakra-ui/react';
import LoveCss from './Heading.css';

function Heading() {
	return (
		<>
			<HeadingChakra as="h1" noOfLines={3}>
				Share <HeadingChakra className="love" as="h1" size="4xl">Love</HeadingChakra>
				<br />Now in the <br />
				Blockchain
			</HeadingChakra>
		</>
	);
}

export default Heading;
