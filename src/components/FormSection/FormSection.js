import { Heading,
		 FormControl,
		 Input,
		 Textarea,
		 Button } from "@chakra-ui/react";
import FormSectionCss from "./FormSection.css";

function FormSection() {
	return (
		<div className="formSection">
			<Heading id="title" size="3xl">
				One <span id="click">Click </span>
				One <span id="smile">Smile</span>
			</Heading>
			<div className="blockForm">
				<FormControl>
					<Input	type="text"
							placeHolder="Your name"
							variant="filled"
							className="nameInput"/>
					<Textarea	variant="filled"
								placeHolder="Write your happy message here to the Blockchain"
								className="messageInput"/>
					<Button colorScheme="blue">Smile </Button>
				</FormControl>
			</div>
		</div>
	);
}

export default FormSection;
