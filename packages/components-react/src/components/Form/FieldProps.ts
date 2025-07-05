import { ReactNode } from 'react';

export interface FieldProps {
    /**
     * Label describing the field. This label comes in two flavors:
     * - Floating label (default): the label is displayed above the field when it is focused or has a value.
     *   When the field is empty and not focused, the label is displayed inside the field as a placeholder.
     * - Non-floating label: the label is displayed above the field at all times.
     */
    label?: string;
    /**
     * Whether the label should float above the field when focused or has a value.
     * If false, the label will always be displayed above the field.
     */
    floatingLabel?: boolean;
    /**
     * Placeholder that is displayed inside the field when it is empty and not focused.
     * When the field has a floating label, this placeholder is shown when the label is focussed.
     */
    placeholder?: string;
    /**
     * Icon to display at the start of the field, typically used for visual cues or branding.
     */
    iconStart?: ReactNode;
    /**
     * Icon to display at the end of the field, typically used for actions like clearing the field or showing additional options.
     */
    iconEnd?: ReactNode;
    /**
     * Indicates whether the field has an error.
     */
    hasError?: boolean;
}
