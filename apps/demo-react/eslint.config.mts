import reactConfig from "@devohda/eslint-config-react";
import typescriptConfig from "@devohda/eslint-config-typescript";
import tseslint from "typescript-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default tseslint.config([
	reactConfig,
	typescriptConfig,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: __dirname,
				project: [
					"./tsconfig.json",
					"./tsconfig.app.json",
					"./tsconfig.node.json",
				],
			},
		},
	},
]);
