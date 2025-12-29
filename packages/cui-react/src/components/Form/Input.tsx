import { FC, InputHTMLAttributes, useId, useState } from 'react';
import { Field } from './Field';
import '@coderan/cui-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';
import { Group } from './Group';
import { GroupProps } from './GroupProps';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps, GroupProps {
    formFieldClassname?: string;
}

export const Input: FC<InputProps> = ({
    formFieldClassname,
    placeholder,
    label,
    iconStart,
    iconEnd,
    id,
    errors,
    hint,
}) => {
    const fallbackId = useId();
    const inputId = id || fallbackId;

    const [value, setValue] = useState('');

    return (
        <Group
            errors={errors}
            hint={hint}
        >
            <Field
                className={formFieldClassname}
                label={label}
                inputId={inputId}
                hasValue={!! value}
                iconStart={iconStart}
                iconEnd={iconEnd}
                hasError={!!errors}
            >
                <input
                    type="text"
                    className="cui-form__input"
                    placeholder={placeholder}
                    id={inputId}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                {/*    errors */}
                {/*    hint */}
            </Field>
        </Group>
    )
}
