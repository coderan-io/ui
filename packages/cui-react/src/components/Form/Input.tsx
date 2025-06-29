import { FC, InputHTMLAttributes, useId, useState } from 'react';
import { Field } from './Field';
import '@coderan/cui-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';
import { Group } from './Group';
import { GroupProps } from './GroupProps';
import { ClassValue } from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldProps, GroupProps {
    groupClassName?: ClassValue;
    fieldClasName?: ClassValue;
}

export const Input: FC<InputProps> = ({
    groupClassName,
    fieldClasName,
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
            className={groupClassName}
        >
            <Field
                className={fieldClasName}
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
                    aria-placeholder={placeholder}
                    aria-label={label}
                    id={inputId}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </Field>
        </Group>
    )
}
