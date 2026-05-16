import { Button } from '../Button';
import { ButtonColor } from '../ButtonColor';

const icons = ['👠', '👡', '👢', '👣', '👤', '👥', '👦', '👧', '👨', '👩', '👪', '👫', '👬', '👭', '👮', '👯', '👰', '👱', '👲', '👳', '👴', '👵', '👶', '👷', '👸', '👹', '👺', '👻', '👼', '👽', '👾', '👿', '💀', '💁', '💂', '💃', '💄', '💅', '💆', '💇', '💈', '💉', '💊', '💋', '💌', '💍', '💎', '💏', '💐', '💑', '💒', '💓', '💔', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞', '💟', '💠', '💡', '💢', '💣', '💤', '💥', '💦', '💧', '💨', '💩', '💪', '💫', '💬', '💭', '💮', '💯', '💰', '💱', '💲', '💳', '💴', '💵', '💶', '💷', '💸', '💹', '💺', '💻', '💼', '💽', '💾', '💿', '📀', '📁', '📂', '📃', '📄', '📅', '📆', '📇', '📈', '📉', '📊'];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'React/Components/Button',
    component: Button,
    args: {
        children: 'Button',
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
        loading: { control: 'boolean' },
        loadingContent: { control: 'text' },
        color: {
            type: 'select',
            options: Object.values(ButtonColor),
        },
        iconStart: {
            type: 'select',
            // font awesome icons as options
            options: icons,
        },
        iconEnd: {
            type: 'select',
            // font awesome icons as options
            options: icons,
        },
        size: {
            type: 'select',
            options: ['sm'],
        }
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        color: ButtonColor.PRIMARY,
        children: 'Primary Button',
    },
};
