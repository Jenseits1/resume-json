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
	educationH: {
		display: "flex",
		flexDirection: "column",
	},
});

interface SectionItemProps {
	item: Exclude<ISectionItem, string>;
}

export const SectionItem: FunctionComponent<SectionItemProps> = ({ item }) => {
	return (
		<View>
			<View style={styles.sectionItemHeader}>
				<View>
					{item.itemList ? (
						<Text>
							<TitleComponent title={item.title + ": "} />
							{item.itemList?.join(", ")}
						</Text>
					) : (
						<TitleComponent title={item.title} />
					)}
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
