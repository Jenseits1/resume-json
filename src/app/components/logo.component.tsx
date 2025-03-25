import { Box, Icon, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { VscJson } from "react-icons/vsc";
interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Icon size="2xl" color="yellow.500">
				<VscJson />
			</Icon>
			<Text
				fontSize="2xl"
				fontFamily="cursive"
				marginLeft={2}
				fontWeight="bold"
			>
				Resume.json
			</Text>
		</Box>
	);
};
