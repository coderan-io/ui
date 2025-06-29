import { FC, HTMLAttributes, PropsWithChildren, useId } from 'react';
import { clsx } from 'clsx';
import '@coderan/cui-styles/src/components/forms.scss';
import { GenericFormFieldProps } from './GenericFormFieldProps';



export interface FormContainerProps extends HTMLAttributes<HTMLDivElement>, GenericFormFieldProps {
    inputId: string;
    hasValue?: boolean;
}

export const Group: FC<PropsWithChildren<FormContainerProps>> = ({
    children,
    label,
    floatingLabel = true,
    className, // TODO propagate class name to proper element
    inputId,
    hasValue,
    iconStart,
    iconEnd,
    ...props
}) => {
    return (
        <div className={clsx('cui-form-group')}>
            <div className={clsx(
                'cui-form-field',
                hasValue && 'cui-form-field--has-value',
                className,
            )} {...props}>
                {iconStart && (
                    <span className="cui-form_icon-start">
                        {iconStart}
                    </span>
                )}
                <div className="cui-form-input-wrapper">
                    {floatingLabel && label && (
                        <label className="cui-form-label" htmlFor={inputId}>
                            {label}
                        </label>
                    )}
                    {children}
                </div>
                {iconEnd && (
                    <span className="cui-form_icon-end">
                        {iconEnd}
                    </span>
                )}
            </div>
        </div>

    )
}
