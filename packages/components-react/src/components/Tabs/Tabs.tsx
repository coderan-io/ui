import {
    type FC,
    type ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import styles from './tabs.module.css';
import { clsx } from 'clsx';

export interface Tab {
    key: string;
    title: ReactNode;
    content: ReactNode;
}

export interface TabsProps {
    items: Tab[];
    beforeChange?: (currentTab: string, newTab: string) => boolean | Promise<boolean>;
    afterChange?: (newTab: string, previousTab: string) => void;
}

export const Tabs: FC<TabsProps> = ({
    items,
}) => {
    const [currentTab, setCurrentTab] = useState<Tab>(items[0]);

    const tabsHeaderRef = useRef<HTMLDivElement>(null);
    const tabHeaderMarkerRef = useRef<HTMLDivElement>(null);

    const moveMarkerToTarget = (target: HTMLElement): void => {
        tabHeaderMarkerRef.current.style.width = `${target.clientWidth}px`;

        const leftOffset = target.offsetLeft;
        tabHeaderMarkerRef.current.style.setProperty(
            '--internal_tab-marker-left-offset',
            `${leftOffset}px`,
        );
    }

    const switchTab = useCallback((newTab: Tab, target: HTMLElement) => {
        setCurrentTab(newTab);

        moveMarkerToTarget(target);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const firstTab = tabsHeaderRef.current.querySelectorAll(`.${styles.tabHeaderItem}`).item(0);

            if (firstTab) {
                moveMarkerToTarget(firstTab as HTMLElement);
            }
        })
    }, [switchTab]);

    return (
        <>
            <div className={styles.tabsHeader} ref={tabsHeaderRef}>
                {items.map((tab: Tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        className={clsx(
                            styles.tabHeaderItem,
                            currentTab.key === tab.key && styles['tabHeaderItem--active'],
                        )}
                        onClick={(e) => switchTab(tab, e.target as HTMLButtonElement)}
                    >
                        {tab.title}
                    </button>
                ))}
                <div className={styles.tabHeaderMarker} ref={tabHeaderMarkerRef} />
            </div>
            {currentTab.content}
        </>
    );
};
