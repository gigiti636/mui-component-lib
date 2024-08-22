import { Theme, ThemeOptions } from '@mui/material/styles';

export declare const getSecondaryBgColor: (theme: Theme) => string;
export declare const getBorderColor: (theme: Theme) => "#262526" | "rgba(0, 0, 0, 0.30)";
export type ThemeType = 'light' | 'dark';
export default function getThemeOptions(theme: ThemeType): ThemeOptions;
