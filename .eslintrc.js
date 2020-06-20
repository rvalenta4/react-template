module.exports = {
	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:import/recommended",
		"plugin:prettier/recommended",
	],
	plugins: ["react-hooks"],
}
