import Ajv from "ajv";
import { jsonSchema } from "../schemas/json.schema";

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(jsonSchema);

export const validateJson = (json: string) => {
	try {
		const parsedJson = JSON.parse(json);

		const valid = validate(parsedJson);

		if (!valid) {
			return {
				valid: false,
				errors:
					validate.errors?.map(
						(err) => `${err.instancePath} ${err.message}`
					) || [],
			};
		}

		return { valid: true, errors: [] };
	} catch (error) {
		return {
			valid: false,
			errors: ["syntax error found"],
		};
	}
};
