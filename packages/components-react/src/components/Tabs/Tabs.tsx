import { TabsContext } from './TabsContex';
import { FC, PropsWithChildren, useMemo, useState } from 'react';
import styles from './tabs.module.css';

export interface TabsProps {

}

export const Tabs: FC<PropsWithChildren<TabsProps>> = ({
    children,
}) => {
    const [tabs, setTabs] = useState<string[]>([]);
    const [currentTab, setCurrentTab] = useState<string>('');

    const registerTab = (name: string) => {
        setTabs((prevTabs: string[]): string[] => {
            if (prevTabs.includes(name)) {
                return prevTabs;
            }
            const newTabs = [...prevTabs, name];
            // If it's the first tab, set it as current
            if (newTabs.length === 1) {
                setCurrentTab(name);
            }
            return newTabs;
        });
    }

    const unregisterTab = (name: string) => {
        setTabs((prevTabs: string[]): string[] => {
            return prevTabs.filter((tab) => tab !== name)
        });
    }

    return (
        <TabsContext.Provider value={{
            tabs,
            currentTab,
            registerTab,
            unregisterTab,
        }}>
            <div className={styles.tabsHeader}></div>
            {children}
        </TabsContext.Provider>
    )
}
