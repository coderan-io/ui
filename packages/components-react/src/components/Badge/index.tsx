import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Color } from '../../utilities/Color';
import '@coderan/component-styles/src/components/badge.scss';
import { clsx } from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    color?: Color;
}

export const Badge: FC<PropsWithChildren<BadgeProps>> = ({
    className,
    color,
    children,
}) => (
    <div className={clsx(
        'badge',
        `badge--${color}`,
        className,
    )}>
        {children}
    </div>
)
