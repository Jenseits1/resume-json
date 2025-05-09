import { IHeader, ISection, ISectionItem } from "@/app/types/resume.types";
import { Page, StyleSheet, View } from "@react-pdf/renderer";
import { FunctionComponent } from "react";
import { Header } from "./header";
import { Section } from "./section";

interface DefaultTemplateProps {
	header: IHeader;
	sections: {
		section: ISection<ISectionItem>;
		sectionName: string;
	}[];
}

const styles = StyleSheet.create({
	page: {
		fontSize: 12,
		flexDirection: "column",
		paddingVertical: 24,
		paddingHorizontal: 24,
		fontFamily: "Arial",
	},
	sections: {
		gap: 8,
	},
});

export const DefaultTemplate: FunctionComponent<DefaultTemplateProps> = ({
	header,
	sections,
}) => {
	return (
		<Page style={styles.page}>
			{header && <Header header={header} />}

			<View style={styles.sections}>
				{sections.map((section, index) => {
					return (
						<Section
							key={index}
							sectionName={section.sectionName}
							section={section.section}
						/>
					);
				})}{" "}
			</View>
		</Page>
	);
};
