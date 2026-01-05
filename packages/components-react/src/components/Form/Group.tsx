import {
    type FC,
    type PropsWithChildren,
} from 'react';
import { type ClassValue, clsx } from 'clsx';
import styles from './form.module.css';
import { type GroupProps } from './GroupProps';

export interface FormContainerProps extends GroupProps {
    className?: ClassValue;
}

export const Group: FC<PropsWithChildren<FormContainerProps>> = ({
    children,
    className,
    hint,
    errors,
    ...props
}) => {
    const errorArray = errors ? (Array.isArray(errors) ? errors : [errors]) : [];

    return (
        <div
            className={clsx(
                styles.cuiFormGroup,
                className,
            )}
            {...props}
        >
            {children}
            {errorArray.map((error: string, index: number) => {
                return (
                    <div className={styles.cuiFormError} key={index}>
                        {error}
                    </div>
                );
            })}
            {hint && (
                <div className={styles.cuiFormHint}>
                    {hint}
                </div>
            )}
        </div>
    );
};
