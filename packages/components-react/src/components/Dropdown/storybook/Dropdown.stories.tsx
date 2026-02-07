import { Dropdown, type ReferenceProps } from '../Dropdown';
import { Button } from '../../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'React/Components/Dropdown',
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    render: (args: Record<string, unknown>) => (
        <Dropdown
            {...args}
            trigger={referenceProps => (
                <Button
                    {...referenceProps}
                    color="primary"
                >
                    Click me
                </Button>
            )}
        >
            <Dropdown.Item>Dropdown item 1</Dropdown.Item>
            <Dropdown.Divider />
        </Dropdown>
    ),
};

export const Trigger_on_hover = {
    render: (args: Record<string, unknown>) => (
        <Dropdown
            {...args}
            triggerOn="hover"
            trigger={referenceProps => (
                <Button
                    {...referenceProps}
                    color="primary"
                >
                    Hover me
                </Button>
            )}
        >
            <Dropdown.Item icon="😄">Dropdown item 1</Dropdown.Item>
            <Dropdown.Divider />
        </Dropdown>
    ),
};
