import { FunctionComponent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useResume } from "@/app/contexts/resume.context";
import { ResumeTab } from "./resume-tab";

interface ResumeTabsProps {}

export const ResumeTabs: FunctionComponent<ResumeTabsProps> = () => {
	const { getResume, resumes } = useResume();

	return (
		<>
			<Tabs className="w-full h-full" defaultValue={resumes[0]}>
				<TabsList>
					{resumes.map((resume, index) => (
						<TabsTrigger key={index} value={resume}>
							{resume}
						</TabsTrigger>
					))}
				</TabsList>

				{resumes.map((resume, index) => (
					<TabsContent
						className="w-full h-full"
						key={index}
						value={resume}
					>
						<ResumeTab resumeName={resume} />
					</TabsContent>
				))}
			</Tabs>
		</>
	);
};
