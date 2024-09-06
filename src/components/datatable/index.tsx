import type { GridPaginationModel } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';
import type { UpDataGridProps } from './types';
import { rowsPerPageOptions } from './types';
import { useState } from 'react';
import { getBorderColor } from '@/theme/helper.ts';

export default function UpDataGrid<T>({
  cols,
  rows,
  id,
  withRowSelectOptions = true,
  isServerSide = true,
  sx,
  onServerSideParamsChange,
  ...rest
}: UpDataGridProps<T>) {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState<rowsPerPageOptions>(rowsPerPageOptions.option_1);

  const handlePageSizeChange = (model: GridPaginationModel) => {
    setPage(model.page);
    setPageSize(model.pageSize);
    if (onServerSideParamsChange) {
      onServerSideParamsChange(model.page, model.pageSize);
    }
  };

  let options;
  if (withRowSelectOptions) {
    options = [rowsPerPageOptions.option_1, rowsPerPageOptions.option_2, rowsPerPageOptions.option_3];
  } else {
    options = [rowsPerPageOptions.option_1];
  }

  return (
    <DataGrid
      density={'comfortable'}
      autoHeight={true}
      columnHeaderHeight={29}
      showCellVerticalBorder={false}
      sx={{
        border: 'none',
        borderRadius: '0px 0px 25px 25px',
        background: (theme) => `${theme.palette.background.paper}`,

        '& .MuiDataGrid-columnHeaders': {
          borderTop: (theme) => `1px solid ${getBorderColor(theme)}`,
          borderBottom: (theme) => `1px solid ${getBorderColor(theme)}`,
          borderRadius: '0px',
        },
        '& .MuiDataGrid-columnSeparator.MuiDataGrid-columnSeparator--sideRight': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
        },
        '.MuiDataGrid-columnHeader.MuiDataGrid-withBorderColor.MuiDataGrid-columnHeader--withRightBorder.MuiDataGrid-columnHeader--last':
          {
            border: 0,
          },
        '& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus': {
          outline: 'none !important',
        },
        '& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus': {
          outline: 'none !important',
        },
        '&  .MuiDataGrid-scrollbar.MuiDataGrid-scrollbar--horizontal': {
          left: 0,
        },
        ...sx,
      }}
      rows={rows}
      columns={cols}
      getRowId={(row) => row[id]}
      disableColumnSelector={true}
      disableColumnFilter={true}
      sortingMode={isServerSide ? 'server' : 'client'}
      paginationMode={isServerSide ? 'server' : 'client'}
      rowSelection={false}
      paginationModel={{ page, pageSize }}
      pageSizeOptions={options}
      onPaginationModelChange={handlePageSizeChange}
      {...rest}
    />
  );
}
