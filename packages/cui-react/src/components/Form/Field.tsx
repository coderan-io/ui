import { FC, HTMLAttributes, PropsWithChildren, useId } from 'react';
import { clsx } from 'clsx';
import '@coderan/cui-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';



export interface FormContainerProps extends HTMLAttributes<HTMLDivElement>, FieldProps {
    inputId: string;
    hasValue?: boolean;
}

export const Field: FC<PropsWithChildren<FormContainerProps>> = ({
    children,
    label,
    floatingLabel = true,
    className, // TODO propagate class name to proper element
    inputId,
    hasValue,
    iconStart,
    iconEnd,
    hasError,
    ...props
}) => {
    return (
        <div className={clsx(
            'cui-form__field',
            hasValue && 'cui-form-field--has-value',
            hasError && 'cui-form-field--has-error',
            className,
        )} {...props}>
            {iconStart && (
                <span className="cui-form__icon--start">
                    {iconStart}
                </span>
            )}
            <div className="cui-form-input__wrapper">
                {floatingLabel && label && (
                    <label className="cui-form__label" htmlFor={inputId}>
                        {label}
                    </label>
                )}
                {children}
            </div>
            {iconEnd && (
                <span className="cui-form_icon--end">
                    {iconEnd}
                </span>
            )}
        </div>
    )
}
