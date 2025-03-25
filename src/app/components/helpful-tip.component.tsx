import { Alert } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HelpfulTipComponentProps {}

export const HelpfulTipComponent: FunctionComponent<
	HelpfulTipComponentProps
> = () => {
	return (
		<Alert.Root
			status="info"
			w="fit-content"
			borderStartWidth="5px"
			borderStartColor="fg.info"
		>
			<Alert.Indicator />
			<Alert.Content>
				<Alert.Title>Helpful tip</Alert.Title>
				<Alert.Description>
					Edit "sections" inside "metadata" to control which sections
					appear and in which order they will be displayed
				</Alert.Description>
			</Alert.Content>
		</Alert.Root>
	);
};
