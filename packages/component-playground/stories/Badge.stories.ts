import { Badge as BadgeComponent, ButtonColor, Color } from '@coderan/components-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example',
    component: BadgeComponent,
    args: {
        children: 'Badge'
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info:
        // https://storybook.js.org/docs/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        color: {
            type: 'select',
            options: Object.values(Color)
        }
    }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Badge = {
    args: {
        color: Color.RED,
        children: 'Red badge'
    }
};
