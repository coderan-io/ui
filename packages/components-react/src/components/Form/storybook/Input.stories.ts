import {
    Input as InputComponent,
} from '../Input';

const icons = ['👠', '👡', '👢', '👣', '👤', '👥', '👦', '👧', '👨', '👩', '👪', '👫', '👬', '👭', '👮', '👯', '👰', '👱', '👲', '👳', '👴', '👵', '👶', '👷', '👸', '👹', '👺', '👻', '👼', '👽', '👾', '👿', '💀', '💁', '💂', '💃', '💄', '💅', '💆', '💇', '💈', '💉', '💊', '💋', '💌', '💍', '💎', '💏', '💐', '💑', '💒', '💓', '💔', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞', '💟', '💠', '💡', '💢', '💣', '💤', '💥', '💦', '💧', '💨', '💩', '💪', '💫', '💬', '💭', '💮', '💯', '💰', '💱', '💲', '💳', '💴', '💵', '💶', '💷', '💸', '💹', '💺', '💻', '💼', '💽', '💾', '💿', '📀', '📁', '📂', '📃', '📄', '📅', '📆', '📇', '📈', '📉', '📊'];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Form',
    component: InputComponent,
    args: {
        label: 'Input',
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
        placeholder: {
            control: 'text',
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
        hint: {
            control: 'text',
            description: 'Additional hint text to display below the field, typically used for additional instructions or information. Default theme styles these as gray text.',
        },
        errors: {
            control: 'text',
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Input = {
};
