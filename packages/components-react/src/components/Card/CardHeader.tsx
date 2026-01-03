import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import styles from './card.module.css';
import { clsx } from 'clsx';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    subTitle?: string;
    actions?: ReactNode;
}

export const CardHeader: FC<PropsWithChildren<CardHeaderProps>> = ({
    actions,
    children,
    className,
}) => (
    <div
        className={clsx(
            styles.cuiCardHeader,
            className,
        )}
    >
        {children}
        {actions && (
            <div className={styles.cuiCardHeaderActions}>
                {actions}
            </div>
        )}
    </div>
);
