import { type FC, type ReactNode, type Ref } from 'react';
import {
    autoUpdate, flip,
    type FloatingRootContext, offset, shift,
    useFloating,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/utils';

export interface PopoverProps {
    className: string;
    children: ReactNode;
    floatingContext: FloatingRootContext;
    placement: Placement;
}

export const Popover: FC<PopoverProps> = ({
    className,
    floatingContext,
    children,
    placement,
}) => {
    const { refs, floatingStyles } = useFloating({
        rootContext: floatingContext,
        whileElementsMounted: autoUpdate,
        strategy: 'fixed',
        middleware: [shift(), flip(), offset({
            mainAxis: 4,
        })],
        placement,
    });

    return (
        <div
            className={className}
            ref={refs.setFloating}
            style={floatingStyles}
        >
            {children}
        </div>
    );
};
