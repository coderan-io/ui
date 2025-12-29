import { Color } from '../../utilities/Color';
import { Variant } from '../../utilities/Variant';


export const BadgeColor: typeof Color & Partial<typeof Variant>= {
    ...Color,
    PRIMARY: Variant.PRIMARY,
    DANGER: Variant.DANGER,
    SUCCESS: Variant.SUCCESS,
};
