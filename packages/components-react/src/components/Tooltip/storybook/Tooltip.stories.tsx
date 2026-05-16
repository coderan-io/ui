import { Tooltip } from '../Tooltip';
import { Button, ButtonColor } from '../../Button';
import { Placement } from '../../Popover/Placement';

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
            options: Object.values(Placement),
        }
    },
    args: {
        placement: 'top',
        content: 'Tooltip on bottom',
    },
    render: (args) => (
        <Tooltip {...args}>
            <Button color="secondary">Hover me</Button>
        </Tooltip>
    ),
};
