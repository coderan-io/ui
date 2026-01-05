import {
    type ChangeEvent,
    type FC,
    type PropsWithChildren,
    type SelectHTMLAttributes,
    useId,
    useState,
} from 'react';
import { Field } from './Field';
import styles from './form.module.css';
import { type FieldProps } from './FieldProps';
import { Group } from './Group';
import { type GroupProps } from './GroupProps';
import { type ClassValue } from 'clsx';

export interface TextAreaProps extends SelectHTMLAttributes<HTMLSelectElement>, FieldProps, GroupProps {
    groupClassName?: ClassValue;
}

export const TextArea: FC<PropsWithChildren<TextAreaProps>> = ({
    groupClassName,
    label,
    iconStart,
    iconEnd,
    id,
    errors,
    hint,
    children,
}) => {
    const fallbackId = useId();
    const selectId = id || fallbackId;

    const [value, setValue] = useState('');

    return (
        <Group
            errors={errors}
            hint={hint}
            className={groupClassName}
        >
            <Field
                controlWrapperClassName={styles.cuiTextareaWrapper}
                label={label}
                inputId={selectId}
                hasValue={!!value}
                iconStart={iconStart}
                iconEnd={iconEnd}
                hasError={!!errors}
            >
                <textarea
                    className={styles.cuiFormControl}
                    id={selectId}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                    value={value}
                >
                    {children}
                </textarea>
            </Field>
        </Group>
    );
};
