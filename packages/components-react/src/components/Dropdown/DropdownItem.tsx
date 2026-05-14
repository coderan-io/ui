import type { FC, ReactNode } from 'react';
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
        <div className={styles.dropdownItem}>
            {icon && (
                <div className={styles.dropdownItemIcon}>
                    {icon}
                </div>
            )}
            {children}
        </div>
    );
};
