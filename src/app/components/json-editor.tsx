"use client";
import React, { FunctionComponent } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { jsonSchema } from "../schemas/json.schema";
import { useColorMode } from "@/components/ui/color-mode";

interface JsonEditorProps {
	value?: string;
	onChange: (value?: string) => void;
}

export const JsonEditor: FunctionComponent<JsonEditorProps> = ({
	value,
	onChange,
}) => {
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
			height={500}
			width="100%"
			theme={colorMode == "dark" ? "vs-dark" : "light"}
			defaultLanguage="json"
			onChange={onChange}
			value={value}
			onMount={handleEditorMount}
		/>
	);
};
