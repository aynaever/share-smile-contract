import { Heading,
		 FormControl,
		 Input,
		 Textarea,
		 Button } from "@chakra-ui/react";
import { useState } from "react";
import { sendSmile } from "../../utils/connectToEthereum";
import FormSectionCss from "./FormSection.css";

function FormSection() {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

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
							className="nameInput"
							onChange={(e) => setName(e.target.value)}/>
					<Textarea	variant="filled"
								placeHolder="Write your happy message here to the Blockchain"
								className="messageInput"
								onChange={(e) => setMessage(e.target.value)}/>
					<Button	colorScheme="blue"
							onClick={() => sendSmile(name, message)}>Smile </Button>
				</FormControl>
			</div>
		</div>
	);
}

export default FormSection;
