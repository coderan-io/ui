import { type FC, type ReactNode } from 'react';
import styles from './dropdown.module.css';

export interface DropdownItemProps {
    icon?: ReactNode;
    children?: ReactNode;
}

export const DropdownItem: FC<DropdownItemProps> = ({
    icon,
    children,
}) => {
    return (
        <div className={styles.cuiDropdownItem}>
            {icon && (
                <div className={styles.cuiDropdownItemIcon}>
                    {icon}
                </div>
            )}
            {children}
        </div>
    );
};
