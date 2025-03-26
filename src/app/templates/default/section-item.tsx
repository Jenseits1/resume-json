import { FunctionComponent } from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { ISectionItem } from "@/app/types/resume.types";
import { TitleComponent } from "./components/title.component";
import { SubtitleComponent } from "./components/subtitle.component";
import { DateLocationComponent } from "./components/date-location.component";
import { BulletPointComponent } from "./components/bullet-point.component";

const styles = StyleSheet.create({
	sectionItemHeader: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
});

interface SectionItemProps {
	index: number;
	item: Exclude<ISectionItem, string>;
	sectionName: string;
}

export const SectionItem: FunctionComponent<SectionItemProps> = ({
	index,
	item,
	sectionName,
}) => {
	if (sectionName == "skills")
		return (
			<Text>
				<TitleComponent title={`${item.title}: `} />
				{item.itemList?.join(", ")}
			</Text>
		);

	return (
		<View style={{ marginTop: index == 0 ? 0 : 4 }}>
			<View style={styles.sectionItemHeader}>
				<View>
					<TitleComponent title={item.title} />
					<SubtitleComponent subtitle={item.subtitle} />
				</View>
				{item.date && item.location && (
					<DateLocationComponent
						date={item.date}
						location={item.location}
					/>
				)}
			</View>

			<BulletPointComponent bulletPoints={item.bulletPoints} />
		</View>
	);
};
