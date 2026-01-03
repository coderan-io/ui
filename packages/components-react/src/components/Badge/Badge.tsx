import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import styles from './badge.module.css';
import { ValueOf } from '../../utilities/types';
import { BadgeColor } from './BadgeColor';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    // use the values of the Color object
    color?: ValueOf<typeof BadgeColor>;
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
    className,
    color,
    children,
}) => (
    <div
        className={clsx(
            styles.cuiBadge,
            styles[`cuiBadge--${color}`],
            className,
        )}
    >
        {children}
    </div>
);
