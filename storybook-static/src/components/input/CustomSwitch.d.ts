import { SwitchProps } from '@mui/material/Switch';

interface Props extends SwitchProps {
    title?: string;
    checked: boolean;
    name?: string;
    onChange: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    disabled?: boolean;
}
export declare function CustomSwitch({ title, checked, onChange, name, color, disabled, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export declare const AntSwitch: import('@emotion/styled').StyledComponent<SwitchProps & import('@mui/system').MUIStyledCommonProps<import('@mui/material/styles').Theme>, {}, {}>;
export {};
