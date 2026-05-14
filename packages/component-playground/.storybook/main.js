import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../../components-react/src/**/*/*.stories.@(ts|tsx)',
    ],

    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-docs"),
    ],

    framework: {
        name: getAbsolutePath("@storybook/react-vite"),
        options: {}
    }
};
export default config;

function getAbsolutePath(value) {
    return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
