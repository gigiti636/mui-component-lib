import UpDataGrid from './index';
import type { Meta, StoryObj } from '@storybook/react';
import type { GridColDef } from '@mui/x-data-grid';

const meta: Meta<typeof UpDataGrid> = {
  title: 'Components/UpDataGrid',
  component: UpDataGrid,
  parameters: {
    docs: {
      description: {
        component: 'A data-grid component that can be customized with different props.',
      },
    },
  },
  argTypes: {
    cols: {
      control: { type: 'object' },
      description: 'An array of column definitions for the data grid.',
      name: 'columns definition based on DataGrid',
    },
    rows: {
      control: { type: 'object' },
      description: 'An array of rows to be displayed in the data grid.',
      name: 'rows based on column definition',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'data loader',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UpDataGrid>;

export const Primary: Story = {
  args: {
    cols: [
      {
        field: 'id',
        headerName: 'ID',
        type: 'string',
        headerAlign: 'center',
        align: 'left',
        width: 100,
      },
      {
        field: 'firstName',
        headerName: 'First Name',
        type: 'string',
        headerAlign: 'center',
        align: 'left',
        width: 150,
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        type: 'string',
        headerAlign: 'center',
        align: 'left',
        width: 150,
      },
      {
        field: 'fullname',
        headerName: 'Full Name',
        type: 'string',
        headerAlign: 'center',
        align: 'left',
        width: 200,
      },
    ] as GridColDef[],
    rows: [
      { id: 1, firstName: 'John', lastName: 'Doe', fullname: 'John Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', fullname: 'Jane Smith' },
      { id: 3, firstName: 'Alice', lastName: 'Johnson', fullname: 'Alice Johnson' },
      { id: 4, firstName: 'Bob', lastName: 'Brown', fullname: 'Bob Brown' },
      { id: 5, firstName: 'Charlie', lastName: 'Davis', fullname: 'Charlie Davis' },
    ],
    rowCount: 5,
    loading: false,
    id: 'id',
  },
};
