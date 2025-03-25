import { Box, Container, Icon, Separator, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FooterComponentProps {}

export const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
	return (
		<Container as="footer" paddingTop={16} paddingBottom={12} maxW="full">
			<Separator marginBottom={12} />

			<Text color="fg.muted" marginRight={2}>
				&copy; {new Date().getFullYear()} Built by Washington Bueno
			</Text>
		</Container>
	);
};
