import type { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import styles from './notifications.module.scss';
import type { ValueOf } from '../../utilities/types';
import { NotificationVariant } from './NotificationVariant';
import { clsx } from 'clsx';
import { InfoIcon } from './InfoIcon';
import { DangerIcon } from './DangerIcon';
import { WarningIcon } from './WarningIcon';
import { SuccessIcon } from './SuccessIcon';

export interface NotificationProps {
    variant?: ValueOf<typeof NotificationVariant>;
    title: string;
    icon?: ReactNode;
    withIconFrame?: boolean;
}

export const Notification: FC<PropsWithChildren<NotificationProps>> = ({
    children,
    variant,
    title,
    icon,
    withIconFrame = true,
}) => {
    const renderIcon = (): ReactElement => {
        if (! variant && ! icon) {
            return undefined;
        }

        const variantIcon = variant
            ? ({
                    [NotificationVariant.INFO]: <InfoIcon />,
                    [NotificationVariant.SUCCESS]: <SuccessIcon />,
                    [NotificationVariant.WARNING]: <WarningIcon />,
                    [NotificationVariant.DANGER]: <DangerIcon />,
                }[variant])
            : undefined;

        return withIconFrame
            ? (
                    <div className={styles.cuiNotificationIconFrame}>
                        {icon || variantIcon}
                    </div>
                )
            : (
                    icon || variantIcon
                );
    };

    return (
        <div
            className={clsx(
                styles.cuiNotification,
                variant && styles[`cuiNotification--${variant}`],
            )}
        >
            {(icon || variant) && (
                <div className={styles.cuiNotificationIconContainer}>
                    {renderIcon()}
                </div>
            )}
            <div className={styles.cuiNotificationContent}>
                <span className={styles.cuiNotificationTitle}>{title}</span>
                {children}
            </div>
        </div>
    );
};
