import { ReactNode } from 'react';
import { SxProps } from '@mui/material/styles';

interface SelectProps<T> {
    value?: T;
    handleValueChange: (_value: T) => void;
    options: {
        value: T;
        label: ReactNode;
    }[];
    sxProps?: SxProps;
}
export declare const Select: <T extends string | number>({ value, handleValueChange, options, sxProps, }: SelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
