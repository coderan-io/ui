import {
    ChangeEvent, Children,
    FC,
    InputHTMLAttributes, isValidElement,
    PropsWithChildren, ReactNode,
    SelectHTMLAttributes,
    useEffect,
    useId, useRef,
    useState
} from 'react';
import { Field } from './Field';
import '@coderan/component-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';
import { Group } from './Group';
import { GroupProps } from './GroupProps';
import { ClassValue, clsx } from 'clsx';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, FieldProps, GroupProps {
    groupClassName?: ClassValue;
    fieldClassName?: ClassValue;
}

export const Select: FC<PropsWithChildren<SelectProps>> = ({
    fieldClassName,
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
    const selectRef = useRef<HTMLSelectElement>(undefined);

    const [value, setValue] = useState('');

    return (
        <Group
            errors={errors}
            hint={hint}
            className={groupClassName}
        >
            <Field
                controlWrapperClassName="cui-form__select-wrapper"
                label={label}
                inputId={selectId}
                hasValue={!!value}
                iconStart={iconStart}
                iconEnd={iconEnd}
                hasError={!!errors}
                labelAlwaysLikeFocus={true}
            >
                <select
                    ref={selectRef}
                    className="cui-form__control cui-form__select"
                    id={selectId}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)}
                    value={value}
                >
                    {children}
                </select>
            </Field>
        </Group>
    )
}
