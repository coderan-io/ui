import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './card.module.css';
import { clsx } from 'clsx';

export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent: FC<PropsWithChildren<CardContentProps>> = ({
    children,
    className,
}) => (
    <div
        className={clsx(
            styles.cuiCardContent,
            className,
        )}
    >
        {children}
    </div>
);
