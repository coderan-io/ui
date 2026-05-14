import type { FC } from 'react';
import styles from './loading.module.css';

export const Spinner: FC = () => {
    return <span className={styles.simpleLoader} />;
};
