"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const react_1 = require("react");
const React = require("react");
require("./style.scss");
const Dialog = ({ text, showDialog, duration = 500, onClose }) => {
    const [displayDialog, setDisplayDialog] = (0, react_1.useState)(showDialog);
    (0, react_1.useEffect)(() => {
        if (showDialog) {
            setDisplayDialog(true);
        }
        else {
            const timer = setTimeout(() => {
                setDisplayDialog(false);
                clearTimeout(timer);
            }, duration);
        }
    }, [showDialog, duration]);
    return (React.createElement("div", { className: `dialog${!showDialog ? ' hide' : ''}`, style: {
            display: displayDialog ? 'flex' : 'none',
            '--duration': duration + 'ms'
        } }, displayDialog ? (React.createElement("div", { className: `dialog__modal${!showDialog ? ' hide' : ''}` },
        React.createElement("p", null, text),
        React.createElement("i", { onClick: () => onClose() }, "X"))) : null));
};
exports.Dialog = Dialog;
