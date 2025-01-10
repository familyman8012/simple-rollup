import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require("path");

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../src/public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    "@storybook/addon-styling",
    {
      name: "@storybook/addon-styling",
      options: {},
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve = config.resolve || {};
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.resolve.extensions = config.resolve.extensions || [];

    // Alias 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ComponentFarm": path.resolve(__dirname, "../src/components"),
      "@ApiFarm": path.resolve(__dirname, "../src/api"),
      "@HookFarm": path.resolve(__dirname, "../src/hooks"),
      "@UtilFarm": path.resolve(__dirname, "../src/utils"),
    };

    // Babel loader 추가
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          "@babel/preset-env",
          [
            "@babel/preset-react",
            {
              runtime: "automatic", // 중요!
            },
          ],
          "@babel/preset-typescript",
        ],
        plugins: ["@emotion/babel-plugin"],
      },
    });

    // 확장자 추가
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
