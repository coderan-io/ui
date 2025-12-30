import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './card.module.css';
import { clsx } from 'clsx';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export interface StaticCardComponents {
    Header: typeof CardHeader;
    Content: typeof CardContent;
}

export const Card: FC<PropsWithChildren<CardProps>> & StaticCardComponents = ({
    children,
    className,
}) => (
    <div
        className={clsx(
            styles.cuiCard,
            className,
        )}
    >
        foo
        {children}
    </div>
)

Card.Header = CardHeader;
Card.Content = CardContent;
