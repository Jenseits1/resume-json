import { Box, Icon, Text, Image } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface MotivationPhraseComponentProps {}

export const MotivationPhraseComponent: FunctionComponent<
	MotivationPhraseComponentProps
> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Text fontFamily="cursive" fontStyle="oblique" marginRight={2}>
				Let's create the future you deserve!
			</Text>

			<Icon size="2xl">
				<Image src="rocket.svg" alt="Rocket" />
			</Icon>
		</Box>
	);
};
