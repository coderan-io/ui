import { Badge as BadgeComponent } from '../Badge';
import { BadgeColor } from '../BadgeColor';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'React/Components/Badge',
    component: BadgeComponent,
    args: {
        children: 'Badge',
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info:
        // https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: {
            type: 'select',
            options: Object.values(BadgeColor),
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        color: BadgeColor.RED,
        children: 'Red badge',
    },
};
