import { DataGridProps, GridColDef } from '@mui/x-data-grid';
import { SxProps } from '@mui/material/styles';

export interface UpDataGridProps<T> extends Partial<DataGridProps> {
    cols: GridColDef[];
    rows: T[];
    id: string | number;
    withRowSelectOptions?: boolean;
    isServerSide?: boolean;
    sx?: SxProps;
    onServerSideParamsChange?: (_page: number, _pageSize: rowsPerPageOptions) => void;
}
export declare enum rowsPerPageOptions {
    option_1 = 30,
    option_2 = 60,
    option_3 = 100
}
export type SortingType = '' | 'asc' | 'desc';
export interface OrderDetails {
    column: string;
    type: SortingType;
}
export interface QueryParams {
    page: number;
    pageSize: rowsPerPageOptions;
}
export declare enum OrderType {
    default = "default",
    asc = "asc",
    desc = "desc"
}
