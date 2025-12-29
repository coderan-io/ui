import { FC, InputHTMLAttributes, useId, useState } from 'react';
import { Field } from './Field';
import styles from './form.module.css';
import { FieldProps } from './FieldProps';
import { Group } from './Group';
import { GroupProps } from './GroupProps';
import { ClassValue, clsx } from 'clsx';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>, FieldProps, GroupProps {
    groupClassName?: ClassValue;
    fieldClasName?: ClassValue;
    onChange?: (value: string) => void;
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
    hasError,
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
                hasError={hasError || (errors?.length && hasError !== false)}
            >
                <input
                    type="text"
                    className={clsx(
                        styles.cuiFormControl,
                        styles.cuiFormInput,
                    )}
                    placeholder={placeholder}
                    aria-placeholder={placeholder}
                    aria-label={label}
                    id={inputId}
                    // TODO onchange
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            </Field>
        </Group>
    )
}
