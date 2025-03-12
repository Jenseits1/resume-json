import { ResumeProvider } from "./contexts/resume.context";
import { Resume } from "./resume";

export default function Home() {
	return (
		<ResumeProvider>
			<Resume />
		</ResumeProvider>
	);
}
