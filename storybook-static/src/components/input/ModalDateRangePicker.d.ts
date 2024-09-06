import { DateRange } from './DateRangePicker';

interface ModalDateRangePickerProps {
    open: boolean;
    handleClose: () => void;
    handleDateSelection: (_date_range: DateRange) => void;
    labels?: {
        selectButton: string;
        custom: string;
        lastMonth: string;
        last3Months: string;
        last6Months: string;
    };
}
export declare const ModalDateRangePicker: ({ open, handleClose, handleDateSelection, labels, }: ModalDateRangePickerProps) => import("react/jsx-runtime").JSX.Element;
export {};
