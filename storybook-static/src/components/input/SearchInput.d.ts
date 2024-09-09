import { SxProps } from '@mui/material/styles';
import { DependencyList } from '../../../node_modules/react';

interface Props {
    title?: string;
    onChange: (_value: string) => void;
    onClear?: () => void;
    presetValue?: string;
    sx?: SxProps;
    manualSearch?: boolean;
    clearQuery?: DependencyList;
    flavor?: 'contained' | 'outlined';
}
export default function SearchInput({ title, onChange, onClear, presetValue, sx, manualSearch, clearQuery, flavor, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
