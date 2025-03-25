"use client";
import React, { FunctionComponent } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { jsonSchema } from "../schemas/json.schema";
import { useColorMode } from "@/components/ui/color-mode";

interface JsonEditorComponentProps {
	value?: string;
	onChange: (value?: string) => void;
}

export const JsonEditorComponent: FunctionComponent<
	JsonEditorComponentProps
> = ({ value, onChange }) => {
	const { colorMode } = useColorMode();

	const handleEditorMount: OnMount = (editor, monacoInstance) => {
		monacoInstance.languages.json.jsonDefaults.setDiagnosticsOptions({
			validate: true,
			schemas: [
				{
					uri: value!,
					fileMatch: ["*"],
					schema: jsonSchema,
				},
			],
		});

		// Disable horizontal scroll and enable word wrapping
		editor.updateOptions({
			scrollbar: {
				horizontal: "hidden",
			},
			wordWrap: "on",
			wrappingIndent: "same",
		});
	};

	return (
		<Editor
			width="100%"
			height={500}
			theme={colorMode == "dark" ? "vs-dark" : "light"}
			defaultLanguage="json"
			onChange={onChange}
			value={value}
			onMount={handleEditorMount}
		/>
	);
};
