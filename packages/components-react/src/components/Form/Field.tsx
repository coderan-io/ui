import { FC, PropsWithChildren } from 'react';
import { ClassValue, clsx } from 'clsx';
import '@coderan/component-styles/src/components/forms.scss';
import { FieldProps } from './FieldProps';



export interface FormContainerProps extends FieldProps {
    inputId: string;
    hasValue?: boolean;
    className?: ClassValue;
    controlWrapperClassName?: ClassValue;
    labelAlwaysLikeFocus?: boolean;
}

export const Field: FC<PropsWithChildren<FormContainerProps>> = ({
    children,
    label,
    floatingLabel = true,
    className,
    controlWrapperClassName,
    inputId,
    hasValue,
    labelAlwaysLikeFocus,
    iconStart,
    iconEnd,
    hasError,
    ...props
}) => {
    return (
        <div className={clsx(
            'cui-form__field',
            (hasValue || labelAlwaysLikeFocus) && 'cui-form__field--has-value',
            hasError && 'cui-form__field--has-error',
            className,
        )} {...props}>
            {iconStart && (
                <span className="cui-form__icon--start">
                    {iconStart}
                </span>
            )}
            <div
                className={clsx(
                    'cui-form-control__wrapper',
                    controlWrapperClassName,
                )}
            >
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
