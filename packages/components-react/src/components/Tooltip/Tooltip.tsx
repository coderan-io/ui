'use client';
import {
    cloneElement,
    Children,
    type FC,
    type ReactElement,
    type ReactNode,
    useState
} from 'react';
import {
    useFocus,
    useFloatingRootContext,
    useHover,
    useInteractions,
} from '@floating-ui/react';
import { type Placement } from '@floating-ui/utils';
import { clsx } from 'clsx';
import styles from './tooltip.module.css';
import { Popover } from '../Popover/Popover';

export interface TooltipProps {
    content: ReactNode;
    children: ReactElement<Record<string, unknown>>;
    placement?: Placement;
}

export const Tooltip: FC<TooltipProps> = ({
    content,
    children,
    placement = 'top',
}) => {
    if (Children.count(children) !== 1) {
        throw new Error('Tooltip component requires exactly one child element.');
    }

    const [isOpen, setIsOpen] = useState(false);
    const [referencedElement, setReferencedElement] = useState(null);
    const [floatingElement, setFloatingElement] = useState<HTMLDivElement | null>(null);

    const context = useFloatingRootContext({
        open: isOpen,
        onOpenChange: setIsOpen,
        elements: {
            reference: referencedElement,
            floating: floatingElement,
        },
    });

    const hover = useHover(context);
    const focus = useFocus(context);

    const { getReferenceProps } = useInteractions([hover, focus]);

    return (
        <>
            {cloneElement(children as ReactElement<Record<string, unknown>>, {
                ...children.props,
                ref: (el: HTMLElement) => {
                    // @ts-ignore
                    children.ref?.(el);

                    setReferencedElement(el);
                },
                ...getReferenceProps(),
            })}
            <Popover
                withArrow={true}
                floatingContext={context}
                setFloatingElement={setFloatingElement}
                className={clsx(
                    styles.cuiTooltip,
                    isOpen && styles['cuiTooltip--visible'],
                )}
                placement={placement || 'top'}
            >
                {content}
            </Popover>
        </>
    );
};
