import { Box, Icon, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { VscJson } from "react-icons/vsc";
interface LogoComponentProps {}

export const LogoComponent: FunctionComponent<LogoComponentProps> = () => {
	return (
		<Box display="flex" alignItems="center">
			<Icon size="xl" strokeWidth="1" color="yellow.400">
				<VscJson />
			</Icon>
			<Text
				fontSize="xl"
				fontFamily="cursive"
				marginLeft={2}
				fontWeight="bold"
			>
				Resume.json
			</Text>
		</Box>
	);
};
