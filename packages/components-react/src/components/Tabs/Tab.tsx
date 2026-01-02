import { FC, PropsWithChildren, ReactNode, useContext, useEffect } from 'react';
import { TabsContext } from './TabsContex';

export interface TabProps {
    name: string;
    title: ReactNode;
}

export const Tab: FC<PropsWithChildren<TabProps>> = ({
    children,
    name,
    title,
}) => {
    const tabsContext = useContext(TabsContext);

    useEffect(() => {
        tabsContext.registerTab(name, { title });

        return () => tabsContext.unregisterTab(name);
    }, []);

    if (tabsContext.currentTab !== name) {
        return null;
    }

    return (
        <div>{children}</div>
    );
}
