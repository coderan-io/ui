// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Tabs, type Tab } from '../Tabs';

export default {
    title: 'Example/Tabs',
    component: Tabs,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info:
        // https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry:
    // https://storybook.js.org/docs/writing-docs/autodocs
    // tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {},
};

const tabs: Tab[] = [
    {
        key: 'tab_one',
        title: 'Tab 1',
        content: 'tab one',
    },
    {
        key: 'tab_two',
        title: 'Veeery long second tab',
        content: 'tab two',
    },
    {
        key: 'tab_three',
        title: 'Smaller 3rd tab',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda atque consequatur corporis distinctio, doloremque ducimus eius enim esse explicabo iste neque nobis pariatur quas quasi! Eligendi facilis maxime repellendus.',
    },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    render: () => (
        <Tabs items={tabs} />
    ),
};
