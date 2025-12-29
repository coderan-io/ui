import { FC, HTMLAttributes, PropsWithChildren, useId } from 'react';
import { clsx } from 'clsx';
import '@coderan/cui-styles/src/components/forms.scss';
import { GroupProps } from './GroupProps';

export type FormContainerProps = HTMLAttributes<HTMLDivElement> & GroupProps;

export const Group: FC<PropsWithChildren<FormContainerProps>> = ({
    children,
    className,
    hint,
    errors,
    ...props
}) => {
    const errorArray = errors ? (Array.isArray(errors) ? errors : [errors]) : [];

    return (
        <div
            className={clsx(
                'cui-form__group',
                className,
            )}
            {...props}
        >
            {children}
            {errorArray.map((error: string, index: number) => {
                return (
                    <div className="cui-form__error" key={index}>
                        {error}
                    </div>
                )
            })}
            {hint && (
                <div className="cui-form__hint">
                    {hint}
                </div>
            )}
        </div>
    )
}
