export interface DateRange {
    startDate: string | 'Invalid Date';
    endDate: string | 'Invalid Date';
}
interface CustomDatePickerProps {
    dateRange: DateRange;
    onDateRangeChange: (_dateRange: DateRange) => void;
    label?: {
        from: string;
        to: string;
    };
}
declare function CustomDatePicker({ dateRange, onDateRangeChange, label, }: CustomDatePickerProps): import("react/jsx-runtime").JSX.Element;
export default CustomDatePicker;
