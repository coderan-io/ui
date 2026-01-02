import { createContext } from 'react';

export interface TabsContextProps {
    currentTab: string;
    tabs: string[];
    registerTab: (name: string, data: { title: string }) => void;
    unregisterTab: (name: string, ) => void;
}

export const TabsContext = createContext<TabsContextProps>({
    currentTab: '',
    tabs: [],
    registerTab: () => {},
    unregisterTab: () => {},
})
