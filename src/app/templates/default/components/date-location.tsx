import { FunctionComponent } from "react";

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
		<div className="text-gray-400 font-semibold">
			<p>
				{startDate} - {endDate}
			</p>
			<p>
				{location.state}, {location.country}
			</p>
		</div>
	);
};
