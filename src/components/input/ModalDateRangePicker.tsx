import Modal from '@/components/modal';
import { Box, Button } from '@mui/material';
import DateRangePicker from './DateRangePicker.tsx';
import type { DateRange } from './DateRangePicker';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';

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

export const ModalDateRangePicker = ({
  open,
  handleClose,
  handleDateSelection,
  labels = {
    selectButton: 'Select',
    custom: 'Custom',
    lastMonth: 'Last Month',
    last3Months: 'Last 3 Months',
    last6Months: 'Last 6 Months',
  },
}: ModalDateRangePickerProps) => {
  const [selectedRange, setSelectedRange] = useState<DateRange>({ startDate: '', endDate: '' });

  const handleDateSelectedByMonth = (months: number) => {
    const now = dayjs();
    const startDate = now.subtract(months, 'month').format('YYYY-MM-DD');
    setSelectedRange({ startDate: startDate, endDate: now.format('YYYY-MM-DD') });
  };

  const selectedTimeline = useMemo(() => {
    if (selectedRange.startDate && selectedRange.endDate) {
      const now = dayjs();
      const one_month_block = now.subtract(1, 'month').format('YYYY-MM-DD');
      const three_month_block = now.subtract(3, 'month').format('YYYY-MM-DD');
      const six_month_block = now.subtract(6, 'month').format('YYYY-MM-DD');

      if (selectedRange.endDate === now.format('YYYY-MM-DD') && selectedRange.startDate === one_month_block) {
        return 'one_month_block';
      } else if (
        selectedRange.endDate === now.format('YYYY-MM-DD') &&
        selectedRange.startDate === three_month_block
      ) {
        return 'three_month_block';
      } else if (
        selectedRange.endDate === now.format('YYYY-MM-DD') &&
        selectedRange.startDate === six_month_block
      ) {
        return 'six_month_block';
      } else {
        return 'custom_block';
      }
    } else {
      return 'custom_block';
    }
  }, [selectedRange.endDate, selectedRange.startDate]);

  return (
    <Modal
      open={open}
      maxWidth={'640px'}
      onClose={handleClose}
      closeModal={handleClose}
      cancelAction={handleClose}
      callToActionLabel={labels?.selectButton as string}
      callToAction={() => handleDateSelection(selectedRange)}
      aria-label={'date-selection-modal'}
    >
      <Box display={'flex'} gap={1} flexWrap={'wrap'}>
        <Button
          color={'info'}
          variant={selectedTimeline === 'custom_block' ? 'contained' : 'outlined'}
          size={'small'}
          onClick={() => setSelectedRange({ startDate: '', endDate: '' })}
        >
          {labels.custom}
        </Button>
        <Button
          color={'info'}
          variant={selectedTimeline === 'one_month_block' ? 'contained' : 'outlined'}
          size={'small'}
          onClick={() => handleDateSelectedByMonth(1)}
          aria-label={'selection-1-month'}
        >
          {labels.lastMonth}
        </Button>
        <Button
          color={'info'}
          variant={selectedTimeline === 'three_month_block' ? 'contained' : 'outlined'}
          size={'small'}
          onClick={() => handleDateSelectedByMonth(3)}
          aria-label={'selection-3-month'}
        >
          {labels.last3Months}
        </Button>
        <Button
          color={'info'}
          variant={selectedTimeline === 'six_month_block' ? 'contained' : 'outlined'}
          size={'small'}
          onClick={() => handleDateSelectedByMonth(6)}
          aria-label={'selection-6-month'}
        >
          {labels.last6Months}
        </Button>
      </Box>
      <Box my={3}>
        <DateRangePicker
          dateRange={{ startDate: selectedRange.startDate, endDate: selectedRange.endDate }}
          onDateRangeChange={(range) => setSelectedRange(range)}
        />
      </Box>
    </Modal>
  );
};
