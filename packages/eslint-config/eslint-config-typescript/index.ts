import tseslint from "typescript-eslint";

export default tseslint.config([
	{
		files: ["**/*.{ts,tsx}"],
		ignores: ["dist", "build"],
		languageOptions: {
			ecmaVersion: 2020,
		},
		extends: [tseslint.configs.recommended],
		rules: {
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
		},
	},
]);
