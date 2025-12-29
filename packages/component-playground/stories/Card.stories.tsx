import { Badge, Button, ButtonColor, Card, Color } from '@coderan/components-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Card',
    component: Card,
    args: {
        children: 'Content'
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
    }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const With_Header = {
    render: (args) => (
        <Card {...args}>
            <Card.Header>Header</Card.Header>
            <Card.Content>
                Content
            </Card.Content>
        </Card>
    )
};

export const With_Header_Actions = {
    render: (args) => (
        <Card {...args}>
            <Card.Header
                actions={(
                    <Button color="secondary">
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                )}
            >
                Header
            </Card.Header>
            <Card.Content>Content</Card.Content>
        </Card>
    )
}

export const With_Header_Badge = {
    render: (args) => (
        <Card {...args}>
            <Card.Header
                actions={(
                    <Badge color="red">New</Badge>
                )}
            >
                Header
            </Card.Header>
            <Card.Content>Content</Card.Content>
        </Card>
    )
}
