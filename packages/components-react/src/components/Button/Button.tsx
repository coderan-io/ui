import type { FC, PropsWithChildren, ReactNode } from 'react';
import { clsx } from 'clsx';
import styles from './button.module.css';
import { ButtonColor } from './ButtonColor';
import { ValueOf } from '../../utilities/types';
import { Spinner as SimpleLoader } from '../Loaders/Spinner';

export type ButtonProps = {
    color: ValueOf<typeof ButtonColor>;
    loading?: boolean;
    loadingContent?: ReactNode;
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    loading,
    loadingContent,
    color,
    iconStart,
    iconEnd,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles.cuiButton,
                styles[`cuiButton--${color}`],
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
            <span className={styles.cuiButtonText}>
                {loading && loadingContent ? loadingContent : children}
            </span>
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
};
