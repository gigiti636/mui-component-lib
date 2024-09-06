import { useState, ChangeEvent, FC, useMemo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { convertToBase64 } from '@/utils/helper/files';
import UploadFileIcon from '@mui/icons-material/UploadFile';

interface FileInputProps {
  accept: string;
  maxMbSize: number;
  onFileSelected: (_file: File, _base64file: string) => void;
  maxWidth?: string;
  label?: { upload_button: string; upload_prompt: string; max_size: string; file_type: string };
}

const FileInput: FC<FileInputProps> = ({
  accept,
  maxMbSize,
  onFileSelected,
  maxWidth = 'unset',
  label = {
    upload_button: 'Upload',
    upload_prompt: 'Upload a file',
    max_size: 'Max size',
    file_type: 'File type',
  },
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState('');

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (file.size < maxSizeInBytes) {
        setSelectedFile(file);
      } else {
        setError(`Max file size is ${maxSizeInBytes / bytes_in_megabyte}`);
      }
    }
  };

  const maxSizeInBytes = 1024 * 1024 * maxMbSize;

  const handleFileSelected = async () => {
    if (selectedFile) {
      const fileToBase64 = await convertToBase64(selectedFile);
      onFileSelected(selectedFile, fileToBase64);
    }
  };

  const bytes_in_megabyte = 1048576;

  const fileSize = useMemo(() => {
    if (selectedFile) {
      return (selectedFile.size / bytes_in_megabyte).toFixed(2);
    } else {
      return 0;
    }
  }, [selectedFile]);

  return (
    <Box
      border={1}
      borderColor={(theme) => theme.palette.text.disabled}
      maxWidth={maxWidth}
      minWidth={'170px'}
      minHeight={'185px'}
      position={'relative'}
      borderRadius={4}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      flexDirection={'column'}
      bgcolor={(theme) => (theme.palette.mode === 'dark' ? '#464646' : '#f6f6f6')}
      p={1}
    >
      {selectedFile ? (
        <Typography
          fontWeight={'bold'}
          color={'text.secondary'}
          variant={'subtitle1'}
          sx={{ width: '100%', wordWrap: 'break-word' }}
        >
          {selectedFile.name}
        </Typography>
      ) : (
        <Typography variant={'subtitle1'} fontWeight={'bold'}>
          {label.upload_prompt}
        </Typography>
      )}
      <Box fontSize={'40px'}>
        <UploadFileIcon fontSize={'inherit'} />
      </Box>
      <input
        aria-label="upload-file"
        type="file"
        onChange={handleFileUpload}
        accept={accept}
        value={''}
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          opacity: 0,
          overflow: 'hidden',
        }}
      />
      {!selectedFile && (
        <>
          <Typography variant={'subtitle2'}>
            {label.max_size} <strong>{maxMbSize}</strong> mb
          </Typography>
          <Typography variant={'subtitle2'}>
            {label.file_type} <strong> {accept}</strong>
          </Typography>
        </>
      )}
      {error && (
        <Typography color={'error.main'} variant={'subtitle1'}>
          {error}
        </Typography>
      )}

      {selectedFile && (
        <>
          <Typography variant={'subtitle2'}> {fileSize} mb</Typography>
          <Button
            onClick={handleFileSelected}
            type={'button'}
            disabled={!selectedFile}
            variant={'outlined'}
            sx={{ mt: 1 }}
          >
            {label.upload_button}
          </Button>
        </>
      )}
    </Box>
  );
};

export default FileInput;
