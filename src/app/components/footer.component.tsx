"use client";
import {
	Box,
	Container,
	Icon,
	IconButton,
	Separator,
	Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { LuGithub } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
interface FooterComponentProps {}

export const FooterComponent: FunctionComponent<FooterComponentProps> = () => {
	return (
		<Container as="footer" paddingTop={16} paddingBottom={8} maxW="full">
			<Separator marginBottom={8} />
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="self-start"
			>
				<Box display="flex" alignItems="center">
					<Text color="fg.muted" marginRight={2}>
						&copy; {new Date().getFullYear()} Built by Washington
						Bueno. Thanks for using Resume.json!
					</Text>

					<Icon color="red.500">
						<FaHeart />
					</Icon>
				</Box>

				<IconButton
					variant="ghost"
					onClick={() =>
						window.open(
							"https://github.com/washingtonfbueno/resume-json",
							"_blank"
						)
					}
				>
					<LuGithub />
				</IconButton>
			</Box>
		</Container>
	);
};
