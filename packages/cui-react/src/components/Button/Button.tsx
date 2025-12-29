import type { FC, PropsWithChildren, ReactNode } from 'react';
import { clsx } from 'clsx';
import '@coderan/cui-styles/src/components/buttons.scss';

export type ButtonProps = {
    variant: 'primary';
    loading: boolean;
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
                'cui-button',
                `cui-button--${variant}`,
                loading && 'cui-button--loading',
            )}
            {...props}
        >
            {iconStart && <i className="cui-button__icon cui-button__icon--start">{iconStart}</i>}
            <span className="cui-button__text">{children}</span>
            {iconEnd && <i className="cui-button__icon cui-button__icon--end">{iconEnd}</i>}
        </button>
    )
}
