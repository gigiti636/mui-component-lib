import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

export interface DateRange {
  //'YYYY-MM-DD'
  startDate: string | 'Invalid Date';
  endDate: string | 'Invalid Date';
}

interface CustomDatePickerProps {
  dateRange: DateRange;
  onDateRangeChange: (_dateRange: DateRange) => void;
  label?: { from: string; to: string };
}

function CustomDatePicker({
  dateRange,
  onDateRangeChange,
  label = { from: 'From', to: 'To' },
}: CustomDatePickerProps) {
  const handleDateChange = (date: Dayjs, key: keyof DateRange) => {
    const newRange = { ...dateRange, [key]: date.format('YYYY-MM-DD') };

    const { startDate, endDate } = newRange;
    if (dayjs(startDate).isAfter(dayjs(endDate))) {
      newRange.startDate = endDate;
      newRange.endDate = startDate;
    }

    onDateRangeChange(newRange);
  };

  return (
    <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} alignItems={'center'}>
      <DatePicker
        label={label.from}
        closeOnSelect={true}
        format="DD/MM/YYYY"
        disableFuture={true}
        value={dayjs(dateRange.startDate)}
        onChange={(date) => handleDateChange(dayjs(date), 'startDate')}
        slotProps={{
          textField: {
            variant: 'outlined',
            size: 'small',
            sx: {
              mt: 1,
              mr: 1,
              width: 300,
              '& input': {
                fontSize: {
                  xs: 13,
                  md: 16,
                },
              },
              '& .MuiFormHelperText-root': {
                padding: 0,
              },
            },
          },
        }}
      />
      <DatePicker
        label={label.to}
        closeOnSelect={true}
        format="DD/MM/YYYY"
        maxDate={dayjs()}
        minDate={dayjs(dateRange.startDate)}
        value={dayjs(dateRange.endDate)}
        onChange={(date) => handleDateChange(dayjs(date), 'endDate')}
        slotProps={{
          textField: {
            variant: 'outlined',
            size: 'small',
            sx: {
              mt: 1,
              mr: 1,
              width: 300,
              '& input': {
                fontSize: {
                  xs: 13,
                  md: 16,
                },
              },
              '& .MuiFormHelperText-root': {
                padding: 0,
              },
            },
          },
        }}
      />
    </Box>
  );
}

export default CustomDatePicker;
