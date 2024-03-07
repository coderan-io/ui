import { Variant } from '../../utilities/Variant';


export const ButtonVariant: Omit<typeof Variant, 'SUCCESS' | 'INFO'> = {
    PRIMARY: Variant.PRIMARY,
    SECONDARY: Variant.SECONDARY,
    WARNING: Variant.WARNING,
    DANGER: Variant.DANGER,
    TRANSPARENT_DARK: Variant.TRANSPARENT_DARK,
    TRANSPARENT_LIGHT: Variant.TRANSPARENT_LIGHT,
};
