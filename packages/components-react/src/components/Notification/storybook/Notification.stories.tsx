import { Notification, type NotificationProps } from '../Notification';
import { NotificationVariant } from '../NotificationVariant';
import { Button } from '../../Button';

const icons = ['👠', '👡', '👢', '👣', '👤', '👥', '👦', '👧', '👨', '👩', '👪', '👫', '👬', '👭', '👮', '👯', '👰', '👱', '👲', '👳', '👴', '👵', '👶', '👷', '👸', '👹', '👺', '👻', '👼', '👽', '👾', '👿', '💀', '💁', '💂', '💃', '💄', '💅', '💆', '💇', '💈', '💉', '💊', '💋', '💌', '💍', '💎', '💏', '💐', '💑', '💒', '💓', '💔', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞', '💟', '💠', '💡', '💢', '💣', '💤', '💥', '💦', '💧', '💨', '💩', '💪', '💫', '💬', '💭', '💮', '💯', '💰', '💱', '💲', '💳', '💴', '💵', '💶', '💷', '💸', '💹', '💺', '💻', '💼', '💽', '💾', '💿', '📀', '📁', '📂', '📃', '📄', '📅', '📆', '📇', '📈', '📉', '📊'];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'React/Components/Notification',
    component: Notification,
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
        title: {
            control: 'text',
            defaultValue: 'Notification Title',
        },
        icon: {
            type: 'select',
            options: ['', ...icons],
        },
        variant: {
            type: 'select',
            options: ['', ...Object.values(NotificationVariant)],
        },
    },
};

export const Success = {
    args: {
        variant: NotificationVariant.SUCCESS,
        title: 'Yay, you did it',
        children: 'You have successfully completed the task!',
    },
};

export const Danger = {
    args: {
        variant: NotificationVariant.DANGER,
        title: 'Uh oh, something went wrong',
        children: 'There was an error processing your request.',
    },
};

export const Warning = {
    args: {
        variant: NotificationVariant.WARNING,
        title: 'Are you sure?',
        children: 'This action could have unintended consequences.',
    },
};

export const Info = {
    args: {
        variant: NotificationVariant.INFO,
        title: 'Just so you know',
        children: 'Here is some important information for you.',
    },
};

export const Info_With_Icon = {
    args: {
        variant: NotificationVariant.INFO,
        title: 'Just so you know',
        children: 'Here is some important information for you.',
        icon: 'ℹ️',
    },
};

export const With_Close_Button = {
    args: {
        variant: NotificationVariant.SUCCESS,
        title: 'Article saved',
        children: 'Your article has been successfully saved.',
        id: 'notif-1',
        closable: true,
        onClose: (id: string) => alert(`Closed notification with id: ${id}`),
    },
    render: (args: NotificationProps) => (
        <Notification
            {...args}
            actions={(
                <Button color="danger" size="sm">Go to article</Button>
            )}
        />
    ),
};
