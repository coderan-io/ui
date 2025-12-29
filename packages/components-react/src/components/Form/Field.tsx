import { FC, PropsWithChildren } from 'react';
import { ClassValue, clsx } from 'clsx';
import '@coderan/component-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';



export interface FormContainerProps extends FieldProps {
    inputId: string;
    hasValue?: boolean;
    className?: ClassValue;
}

export const Field: FC<PropsWithChildren<FormContainerProps>> = ({
    children,
    label,
    floatingLabel = true,
    className,
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
            hasValue && 'cui-form__field--has-value',
            hasError && 'cui-form__field--has-error',
            className,
        )} {...props}>
            {iconStart && (
                <span className="cui-form__icon--start">
                    {iconStart}
                </span>
            )}
            <div className="cui-form-control__wrapper">
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
