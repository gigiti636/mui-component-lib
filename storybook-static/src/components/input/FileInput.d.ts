import { FC } from '../../../node_modules/react';

interface FileInputProps {
    accept: string;
    maxMbSize: number;
    onFileSelected: (_file: File, _base64file: string) => void;
    maxWidth?: string;
    label?: {
        upload_button: string;
        upload_prompt: string;
        max_size: string;
        file_type: string;
    };
    errorMsg?: string;
}
declare const FileInput: FC<FileInputProps>;
export default FileInput;
