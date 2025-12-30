/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../../components-react/src/**/*/*.stories.@(ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-docs',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    }
};
export default config;
