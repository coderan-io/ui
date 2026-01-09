import {
    type FC,
    type ReactNode,
    type MouseEvent,
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
    beforeChange?: (fromTab: Tab, toTab: Tab) => boolean | Promise<boolean>;
    afterChange?: (fromTab: Tab, toTab: Tab) => void;
}

export const Tabs: FC<TabsProps> = ({
    items,
    beforeChange,
    afterChange,
}) => {
    const [currentTab, setCurrentTab] = useState<Tab>(items[0]);

    const tabsHeaderRef = useRef<HTMLDivElement>(null);
    const tabHeaderMarkerRef = useRef<HTMLDivElement>(null);

    const moveMarkerToTarget = (target: HTMLElement): void => {
        const tabItemTarget = target
            .closest<HTMLDivElement>(`.${styles.tabHeaderItem}`);

        tabHeaderMarkerRef.current.style.width = `${tabItemTarget.clientWidth}px`;

        const leftOffset = tabItemTarget.offsetLeft;
        tabHeaderMarkerRef.current.style.setProperty(
            '--internal_tab-marker-left-offset',
            `${leftOffset}px`,
        );
    };

    const switchTab = async (toTab: Tab, target: HTMLElement): Promise<void> => {
        const fromTab = currentTab;
        if (
            beforeChange
            && ! (await beforeChange(fromTab, toTab))
        ) {
            return;
        }

        setCurrentTab(toTab);

        moveMarkerToTarget(target);

        afterChange?.(fromTab, toTab);
    };

    useEffect(() => {
        setTimeout(() => {
            const firstTab = tabsHeaderRef.current.querySelectorAll(`.${styles.tabHeaderItem}`).item(0);

            if (firstTab) {
                moveMarkerToTarget(firstTab as HTMLElement);
            }
        });
    }, []);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabsHeader} ref={tabsHeaderRef}>
                {items.map((tab: Tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        className={clsx(
                            styles.tabHeaderItem,
                            currentTab.key === tab.key && styles['tabHeaderItem--active'],
                        )}
                        onClick={(e: MouseEvent<HTMLButtonElement>) => switchTab(tab, e.target as HTMLButtonElement)}
                    >
                        {tab.title}
                    </button>
                ))}
                <div className={styles.tabHeaderMarker} ref={tabHeaderMarkerRef} />
            </div>
            {currentTab.content}
        </div>
    );
};
