import { Heading,
		 FormControl,
		 Input,
		 Textarea,
		 Button } from "@chakra-ui/react";
import FormSectionCss from "./FormSection.css";

function FormSection() {
	return (
		<div className="formSection">
			<Heading id="title">
				One <span id="click">Click </span>
				One <span id="smile">Smile</span>
			</Heading>
			<div className="blockForm">
				<FormControl>
					<Input type="text" placeHolder="Your name" />
					<Textarea />
					<Button>Smile </Button>
				</FormControl>
			</div>
		</div>
	);
}

export default FormSection;
