import { FunctionComponent } from "react";
import { Subtitle } from "./subtitle";
import { SecondarySubtitle } from "./secondary-subtitle";

interface DateLocationProps {
	startDate: string;
	endDate: string;
	location: {
		state: string;
		country: string;
	};
}

export const DateLocation: FunctionComponent<DateLocationProps> = ({
	startDate,
	endDate,
	location,
}) => {
	return (
		<div className="flex flex-col items-end">
			<Subtitle>{`${location.state}, ${location.country}`}</Subtitle>

			<SecondarySubtitle>{`${startDate} - ${endDate}`}</SecondarySubtitle>
		</div>
	);
};
