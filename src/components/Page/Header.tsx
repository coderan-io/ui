import * as React from 'react';
import clsx from 'clsx';
import { Panel } from '../Pane';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
}

const PageHeader = ({
    children,
    className,
    title
}: React.PropsWithChildren<PageHeaderProps>): React.ReactElement => (
    <Panel
        className={clsx(
            'page-header',
            title && 'with-title',
            className
        )}
    >
        {title && (
            <div
                className={clsx(
                    'page-header-title'
                )}
            >
                {title}
            </div>
        )}
        {children}
    </Panel>
);

export default PageHeader;
