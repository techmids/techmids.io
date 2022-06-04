const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

// const esModules = ['uuid'].join('|');

const customJestConfig = {
	moduleDirectories: ["node_modules", "<rootDir>/"],
	moduleNameMapper: {
		"^@/components/(.*)$": "<rootDir>/components/$1",
		"^@/helpers/(.*)$": "<rootDir>/helpers/$1",
		"^@/config/(.*)$": "<rootDir>/config/$1",
		// le sigh: https://github.com/microsoft/accessibility-insights-web/pull/5421#issuecomment-1109168149
		"^uuid$": require.resolve("uuid"),
	},
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

module.exports = createJestConfig(customJestConfig);
