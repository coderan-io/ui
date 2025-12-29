import { FC, InputHTMLAttributes, useId, useState } from 'react';
import { Group } from './Group';
import '@coderan/cui-styles/src/components/forms.scss';
import { GenericFormFieldProps } from './GenericFormFieldProps';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, GenericFormFieldProps {
    formFieldClassname?: string;
}

export const Input: FC<InputProps> = ({
    formFieldClassname,
    placeholder,
    label,
    iconStart,
    iconEnd,
    id,
}) => {
    const fallbackId = useId();
    const inputId = id || fallbackId;

    const [value, setValue] = useState('');

    return (
        <Group
            className={formFieldClassname}
            label={label}
            inputId={inputId}
            hasValue={!! value}
            iconStart={iconStart}
            iconEnd={iconEnd}
        >
            <input
                type="text"
                className="cui-form-input"
                placeholder={placeholder}
                id={inputId}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            {/*    errors */}
            {/*    hint */}
        </Group>
    )
}
