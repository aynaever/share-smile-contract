import { Heading,
		 FormControl,
		 Input,
		 Textarea,
		 Button } from "@chakra-ui/react";
import { useState } from "react";
import { sendSmile } from "../../utils/connectToEthereum";
import { motion } from "framer-motion";
import FormSectionCss from "./FormSection.css";

function FormSection() {
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');

	return (
		<div className="formSection">
			<motion.div	initial={{ opacity : 0 }}
						animate={{ y : [0, 50], scale : 1.1, opacity : [0.2, 0.5, 1] }}
						transition={{ ease : "easeOut", duration : 1.5 }}>
					<Heading id="title" size="3xl">
					One <span id="click">Click </span>
					One <span id="smile">Smile</span>
				</Heading>
			</motion.div>
			<motion.div	className="blockForm"
						initial={{ opacity : 0 }}
						animate={{ y : [50, 0], scale : 1.1, opacity : [0.2, 0.5, 1] }}
						transition={{ ease : "easeOut", duration : 1.5 }}>
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
					<motion.button	whileHover={{ scale : 1.2 }}
									whileTap={{ scale : 0.9 }}>
					<Button	colorScheme="blue"
							onClick={() => sendSmile(name, message)}>Smile </Button>
					</motion.button>
				</FormControl>
			</motion.div>
		</div>
	);
}

export default FormSection;
