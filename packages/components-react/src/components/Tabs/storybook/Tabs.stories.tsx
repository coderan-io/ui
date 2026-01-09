// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Tabs, type Tab } from '../Tabs';
import { Badge } from '../../Badge';

export default {
    title: 'React/Components/Tabs',
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
        title: (
            <>
                <span>👠</span>
                <span>Tab one</span>
            </>
        ),
        content: 'Tab one',
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

const tabsWithInspirationalHeaders: Tab[] = [
    {
        key: 'tab_one',
        title: (
            <>
                <span>👠</span>
                <span>Tab with icon</span>
            </>
        ),
        content: 'Content of tab with icon',
    },
    {
        key: 'tab_two',
        title: (
            <>
                <span>Tab with badge</span>
                <Badge color="red" size="sm">0</Badge>
            </>
        ),
        content: 'Content of tab with badge',
    },
];

export const Tabs_With_Inspirational_Headers = {
    render: () => (
        <Tabs items={tabsWithInspirationalHeaders} />
    ),
};
