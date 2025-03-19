import { ResumeProvider } from "./contexts/resume.context";
import { Main } from "./main";
import { Provider } from "@/components/ui/provider";

export default function Home() {
	return (
		<ResumeProvider>
			<Provider>
				<Main />
			</Provider>
		</ResumeProvider>
	);
}
