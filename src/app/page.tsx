import { ResumeProvider } from "./contexts/resume.context";
import { Main } from "./main";

export default function Home() {
	return (
		<ResumeProvider>
			<Main />
		</ResumeProvider>
	);
}
