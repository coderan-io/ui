import { type Placement as FloatingPlacement } from '@floating-ui/core';

export const Placement: Record<string, FloatingPlacement> = {
    TOP: 'top',
    TOP_RIGHT: 'top-end',
    RIGHT: 'right',
    BOTTOM_RIGHT: 'bottom-end',
    BOTTOM: 'bottom',
    BOTTOM_LEFT: 'bottom-start',
    LEFT: 'left',
    TOP_LEFT: 'top-start',
};
