import {
    ChangeEvent,
    FC,
    PropsWithChildren,
    SelectHTMLAttributes,
    useId,
    useState,
} from 'react';
import { Field } from './Field';
import styles from './form.module.css';
import { FieldProps } from './FieldProps';
import { Group } from './Group';
import { GroupProps } from './GroupProps';
import { ClassValue, clsx } from 'clsx';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, FieldProps, GroupProps {
    groupClassName?: ClassValue;
}

export const Select: FC<PropsWithChildren<SelectProps>> = ({
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
                controlWrapperClassName={styles.cuiSelectWrapper}
                label={label}
                inputId={selectId}
                hasValue={!!value}
                iconStart={iconStart}
                iconEnd={iconEnd}
                hasError={!!errors}
                labelAlwaysLikeFocus={true}
            >
                <select
                    className={clsx(
                        styles.cuiFormControl,
                        styles.cuiFormSelect,
                    )}
                    id={selectId}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                    value={value}
                >
                    {children}
                </select>
            </Field>
        </Group>
    );
};
