import {
    ChangeEvent,
    FC,
    PropsWithChildren,
    SelectHTMLAttributes,
    useId,
    useState
} from 'react';
import { Field } from './Field';
import '@coderan/component-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';
import { Group } from './Group';
import { GroupProps } from './GroupProps';
import { ClassValue } from 'clsx';

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
                controlWrapperClassName="cui-form__textarea-wrapper"
                label={label}
                inputId={selectId}
                hasValue={!!value}
                iconStart={iconStart}
                iconEnd={iconEnd}
                hasError={!!errors}
            >
                <textarea
                    className="cui-form__control"
                    id={selectId}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
                    value={value}
                >
                    {children}
                </textarea>
            </Field>
        </Group>
    )
}
