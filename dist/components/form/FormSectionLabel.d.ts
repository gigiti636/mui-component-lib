import { TypographyProps } from '../../../node_modules/@mui/material';
import { SxProps } from '../../../node_modules/@mui/material/styles';

interface FormSectionLabel extends TypographyProps {
    label: string;
    sx?: SxProps;
}
declare const FormSectionLabel: ({ label, sx }: FormSectionLabel) => import("react/jsx-runtime").JSX.Element;
export default FormSectionLabel;
