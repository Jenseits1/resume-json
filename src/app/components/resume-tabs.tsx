import { FunctionComponent } from "react";

import { useResume } from "@/app/contexts/resume.context";
import { ResumeTab } from "./resume-tab";
import { CloseButton, Tabs } from "@chakra-ui/react";
import { LuFileJson, LuFolder, LuSquareCheck, LuUser } from "react-icons/lu";

interface ResumeTabsProps {}

export const ResumeTabs: FunctionComponent<ResumeTabsProps> = () => {
	const { resumes } = useResume();

	return (
		<>
			{resumes && (
				<Tabs.Root>
					<Tabs.List>
						{resumes.map(({ id, resume }) => (
							<Tabs.Trigger key={id} value={id}>
								<LuFileJson />
								{`${resume.metadata?.resumeName}.json`}
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{resumes.map(({ id, resume }) => (
						<Tabs.Content key={id} value={id}>
							<ResumeTab {...{ id, resume }} />
						</Tabs.Content>
					))}
				</Tabs.Root>
			)}
		</>
	);
};
