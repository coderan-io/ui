import { type FC, type ReactNode, type Ref, useRef } from 'react';
import {
    arrow,
    autoUpdate, flip,
    FloatingArrow,
    type FloatingRootContext, offset, shift,
    useFloating,
} from '@floating-ui/react';
import type { Placement } from '@floating-ui/utils';

export interface PopoverProps {
    className: string;
    children: ReactNode;
    floatingContext: FloatingRootContext;
    setFloatingElement: Ref<HTMLDivElement>;
    placement: Placement;
    withArrow?: boolean;
}

const ARROW_HEIGHT = 7;
const GAP = 2;

export const Popover: FC<PopoverProps> = ({
    className,
    floatingContext,
    setFloatingElement,
    children,
    placement,
    withArrow = false,
}) => {
    const arrowElement = useRef<SVGSVGElement | null>(null);

    const { floatingStyles, context, } = useFloating({
        rootContext: floatingContext,
        whileElementsMounted: autoUpdate,
        strategy: 'fixed',
        middleware: [
            shift(),
            flip(),
            offset({
                mainAxis: withArrow ? ARROW_HEIGHT + GAP : GAP,
            }),
            ...(withArrow ? [arrow({
                element: arrowElement,
            })] : []),
        ],
        placement,
    });

    return (
        <div
            className={className}
            ref={setFloatingElement}
            style={floatingStyles}
        >
            {withArrow && (
                <FloatingArrow ref={arrowElement} context={context} />
            )}
            {children}
        </div>
    );
};
