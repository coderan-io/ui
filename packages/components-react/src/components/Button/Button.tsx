import type { FC, PropsWithChildren, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './button.module.css'

export type ButtonProps = {
    variant: 'primary';
    loading?: boolean;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    loading,
    variant,
    iconStart,
    iconEnd,
    ...props
}) => {

    return (
        <button
            className={clsx(
                styles.cuiButton,
                styles[`cuiButton--${variant}`],
                loading && styles['cuiButton--loading'],
            )}
            {...props}
        >
            {iconStart && (
                <i
                    className={clsx(
                        styles.cuiButtonIcon,
                        styles['cuiButtonIcon--start'],
                    )}
                >{iconStart}</i>
            )}
            <span className={styles.cuiButtonText}>{children}</span>
            {iconEnd && (
                <i
                    className={clsx(
                        styles.cuiButtonIcon,
                        styles['cuiButtonIcon--end'],
                    )}
                >{iconEnd}</i>
            )}
        </button>
    )
}
