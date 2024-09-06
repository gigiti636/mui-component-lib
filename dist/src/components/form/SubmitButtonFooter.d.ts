import { SyntheticEvent } from 'react';

interface SubmitButtonFooter {
    onClick: (_event: SyntheticEvent) => void;
    isValid?: boolean;
    label?: string;
}
declare function SubmitButton({ onClick, isValid, label }: SubmitButtonFooter): import("react/jsx-runtime").JSX.Element;
export default SubmitButton;
