import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Color } from '../../utilities/Color';
import { clsx } from 'clsx';
import styles from './badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    color?: Color;
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
    className,
    color,
    children,
}) => (
    <div className={clsx(
        styles.cuiBadge,
        styles[`cuiBadge--${color}`],
        className,
    )}>
        {children}
    </div>
)
