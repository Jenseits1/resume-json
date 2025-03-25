"use client";
import { FunctionComponent } from "react";
import { Container, Tabs } from "@chakra-ui/react";
import { ResumeTabComponent } from "./resume-tab.component";
import { useResume } from "../providers/resume.provider";

interface ResumeTabsComponentProps {}

export const ResumeTabsComponent: FunctionComponent<
	ResumeTabsComponentProps
> = () => {
	const { resumes } = useResume();

	return (
		<Container as="div" minHeight="3xl" maxW="full">
			{resumes && (
				<Tabs.Root>
					<Tabs.List>
						{resumes.map(({ id, resume }) => (
							<Tabs.Trigger key={id} value={id}>
								{`${resume.metadata?.resumeName}.json`}
							</Tabs.Trigger>
						))}
					</Tabs.List>

					{resumes.map(({ id, resume }) => (
						<Tabs.Content key={id} value={id}>
							<ResumeTabComponent {...{ id, resume }} />
						</Tabs.Content>
					))}
				</Tabs.Root>
			)}
		</Container>
	);
};
