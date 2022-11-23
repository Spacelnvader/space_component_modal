import { FunctionComponent } from 'react';
import './style.scss';
type DialogProps = {
    text: string;
    showDialog: boolean;
    duration?: number;
    onClose: CallableFunction;
};
export declare const Dialog: FunctionComponent<DialogProps>;
export {};
