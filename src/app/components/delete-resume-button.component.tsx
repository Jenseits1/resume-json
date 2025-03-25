import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { LuDelete } from "react-icons/lu";
import { useResume } from "../providers/resume.provider";

interface DeleteResumeButtonComponentProps {
	id: string;
}

export const DeleteResumeButtonComponent: FunctionComponent<
	DeleteResumeButtonComponentProps
> = ({ id }) => {
	const { deleteResume } = useResume();

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Button variant="subtle">
					<LuDelete />
					Delete
				</Button>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Confirm Deletion</Dialog.Title>
						</Dialog.Header>
						<Dialog.Body>
							Are you sure you want to delete this resume? This
							action is irreversible
						</Dialog.Body>
						<Dialog.Footer>
							<Dialog.ActionTrigger asChild>
								<Button variant="outline">Cancel</Button>
							</Dialog.ActionTrigger>
							<Button
								colorScheme="red"
								onClick={() => deleteResume(id)}
							>
								Delete
							</Button>
						</Dialog.Footer>
						<Dialog.CloseTrigger asChild>
							<CloseButton size="sm" />
						</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
};
