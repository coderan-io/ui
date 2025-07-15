import { FC, PropsWithChildren } from 'react';
import { ClassValue, clsx } from 'clsx';
import styles from './form.module.css';
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
            styles.cuiFormField,
            (hasValue || labelAlwaysLikeFocus) && styles['cuiFormField--filled'],
            hasError && styles['cuiFormField--error'],
            className,
        )} {...props}>
            {iconStart && (
                <span className={styles['cuiFormIcon--start']}>
                    {iconStart}
                </span>
            )}
            <div
                className={clsx(
                    styles.cuiFormControlWrapper,
                    controlWrapperClassName,
                )}
            >
                {floatingLabel && label && (
                    <label className={styles.cuiFormLabel} htmlFor={inputId}>
                        {label}
                    </label>
                )}
                {children}
            </div>
            {iconEnd && (
                <span className={styles['cuiFormIcon--end']}>
                    {iconEnd}
                </span>
            )}
        </div>
    )
}
