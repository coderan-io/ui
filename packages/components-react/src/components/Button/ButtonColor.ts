import { Color } from '../../utilities/Color';


export const ButtonColor: typeof Color & {
    TRANSPARENT_DARK: string;
    TRANSPARENT_LIGHT: string;
} = {
    ...Color,
    TRANSPARENT_DARK: 'transparentDark',
    TRANSPARENT_LIGHT: 'transparentLight',
};
