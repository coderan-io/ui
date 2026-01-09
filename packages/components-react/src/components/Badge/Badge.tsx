import {
    type FC,
    type HTMLAttributes,
    type PropsWithChildren,
} from 'react';
import { clsx } from 'clsx';
import styles from './badge.module.css';
import { type ValueOf } from '../../utilities/types';
import { BadgeColor } from './BadgeColor';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    color?: ValueOf<typeof BadgeColor>;
    size?: 'sm';
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
    className,
    color,
    children,
    size,
}) => (
    <div
        className={clsx(
            styles.cuiBadge,
            styles[`cuiBadge--${color}`],
            size && styles[`cuiBadge--${size}`],
            className,
        )}
    >
        {children}
    </div>
);
