
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Tabs } from '../Tabs';
import { Tab } from '../Tab';

export default {
    title: 'Example',
    component: Tabs,
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
    }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default_tabs = {
    render: ()=> (
        <Tabs>
            <Tab name="tab_one" title="Tab 1">tab one</Tab>
            <Tab name="tab_two" title="Tab 2">tab two</Tab>
        </Tabs>
    )
};
