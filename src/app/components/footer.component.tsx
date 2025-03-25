import { Box, Container, Icon, Separator, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaHeart } from "react-icons/fa";

interface FooterComponentProps {}

export const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
	return (
		<Container as="footer" paddingTop={16} paddingBottom={12} maxW="full">
			<Separator marginBottom={12} />

			<Box display="flex" alignItems="center">
				<Text color="fg.muted" marginRight={2}>
					&copy; {new Date().getFullYear()} Built by Washington Bueno.
					Thanks for choosing Resume.json!
				</Text>

				<Icon color="red.500">
					<FaHeart />
				</Icon>
			</Box>
		</Container>
	);
};
