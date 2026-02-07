'use client';
import { type FC, type ReactElement, type ReactNode, type RefCallback, useState } from 'react';
import { Divider } from './Divider';
import {
    safePolygon,
    useClick,
    useDismiss,
    useFloatingRootContext, useHover,
    useInteractions,
} from '@floating-ui/react';
import styles from './dropdown.module.css';
import { clsx } from 'clsx';
import { type Placement } from '@floating-ui/utils';
import { DropdownItem } from './DropdownItem';
import { Popover } from '../Popover/Popover';

export interface ReferenceProps {
    isOpen: boolean;
    toggle: () => void;
}

export interface DropdownProps {
    trigger: (
        referenceProps: {
            ref: RefCallback<HTMLElement>;
            [key: string]: unknown;
        },
        dropdownProps: ReferenceProps,
    ) => ReactElement;
    triggerOn?: 'click' | 'hover';
    children?: ReactNode;
    placement?: Placement;
}

export interface StaticDropdownComponents {
    Divider: typeof Divider;
    Item: typeof DropdownItem;
}

export const Dropdown: FC<DropdownProps> & StaticDropdownComponents = ({
    trigger,
    children,
    placement = 'bottom-start',
    triggerOn = 'click',
}) => {
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

    const click = useClick(context, {
        enabled: 'click' === triggerOn,
    });

    const hover = useHover(context, {
        enabled: 'hover' === triggerOn,
        handleClose: safePolygon(),
    });
    const dissmis = useDismiss(context, {
        referencePressEvent: 'click'
    });

    const { getReferenceProps } = useInteractions([
        dissmis,
        click,
        hover,
    ]);

    const toggle = (): void => {
        setIsOpen((prev: boolean) => ! prev);
    };

    return (
        <>
            {trigger(
                {
                    ...getReferenceProps(),
                    ref: setReferencedElement,
                },
                {
                    isOpen,
                    toggle,
                },
            )}
            <Popover
                floatingContext={context}
                className={clsx(
                    styles.dropdown,
                    isOpen && styles['dropdown--open'],
                )}
                placement={placement}
            >
                {children}
            </Popover>
        </>
    );
};

Dropdown.Divider = Divider;
Dropdown.Item = DropdownItem;
