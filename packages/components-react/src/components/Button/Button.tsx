import {
    type ButtonHTMLAttributes,
    type FC, forwardRef,
    type PropsWithChildren,
    type ReactNode,
} from 'react';
import { clsx } from 'clsx';
import styles from './button.module.css';
import { ButtonColor } from './ButtonColor';
import { type ValueOf } from '../../utilities/types';
import { Spinner as SimpleLoader } from '../Loaders/Spinner';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color: ValueOf<typeof ButtonColor>;
    loading?: boolean;
    loadingContent?: ReactNode;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    size?: 'sm';
    onClick?: () => void;
    children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    loading,
    loadingContent,
    color,
    iconStart,
    iconEnd,
    size,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={clsx(
                styles.cuiButton,
                styles[`cuiButton--${color}`],
                size && styles[`cuiButton--${size}`],
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
                >
                    {iconStart}
                </i>
            )}
            {(children || (loading && loadingContent)) && (
                <span className={styles.cuiButtonText}>
                    {loading && loadingContent ? loadingContent : children}
                </span>
            )}
            {iconEnd && (
                <i
                    className={clsx(
                        styles.cuiButtonIcon,
                        styles['cuiButtonIcon--end'],
                    )}
                >
                    {iconEnd}
                </i>
            )}
            {loading && (
                <span className={styles.loadingContainer}>
                    <SimpleLoader />
                </span>
            )}
        </button>
    );
});

Button.displayName = 'Button';
