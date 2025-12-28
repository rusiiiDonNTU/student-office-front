import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import Button from "../Button/Button";
import InputRow from "../InputRow/InputRow";

function Modal({ isOpen, onClose, isWhiteButton=true, 
    isBlueButton=false, blueButtonText="", blueButtonAction = () => {}, blueButtonDisabled=false,
    children }) {
    const dialog = useRef();

    useEffect(() => {
        if (isOpen && !dialog.current.open) dialog.current.showModal();
        else if (!isOpen && dialog.current.open) dialog.current.close();
    }, [isOpen]);

    return createPortal(<dialog className="modal" ref={dialog} onClose={onClose}>
        <div className="modal-info">
            {children}
            <div className="modal-buttons">
                <InputRow>
                    {isWhiteButton && <Button onClick={onClose}>ОК</Button>}
                    {isBlueButton && <Button isBlue={true} onClick={blueButtonAction} disabled={blueButtonDisabled}>{blueButtonText}</Button>}
                </InputRow>
            </div>
        </div>
    </dialog>, document.body);
}

export default Modal;