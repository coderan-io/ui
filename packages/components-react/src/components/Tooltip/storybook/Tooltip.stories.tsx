import { Tooltip } from '../Tooltip';
import { Button, ButtonColor } from '../../Button';

export default {
    title: 'React/Components/Tooltip',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        placement: {
            type: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        }
    },
};

export const Default = {
    argTypes: {
        placement: {
            type: 'select',
            options: ['top', 'bottom', 'left', 'right'],
        }
    },
    args: {
        placement: 'bottm',
        content: 'Tooltip on bottom',
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button color="secondary">Hover me</Button>
        </Tooltip>
    ),
};
