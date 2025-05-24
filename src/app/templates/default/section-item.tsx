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
	item: ISectionItem;
	sectionName: string;
}

export const SectionItem: FunctionComponent<SectionItemProps> = ({
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
		<View>
			<View style={styles.sectionItemHeader}>
				<View>
					<TitleComponent title={item.title} />
					<SubtitleComponent subtitle={item.subtitle} />
				</View>

				<DateLocationComponent
					date={item.date}
					location={item.location}
				/>
			</View>

			<View>
				{item.bulletPoints?.map((value, index) => (
					<BulletPointComponent key={index}>
						{value}
					</BulletPointComponent>
				))}
			</View>

			<Text>{item.itemList?.join(", ")}</Text>
		</View>
	);
};
