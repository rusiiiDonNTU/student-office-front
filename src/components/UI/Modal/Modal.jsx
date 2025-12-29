import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import Button from "../Button/Button";
import InputRow from "../InputRow/InputRow";

function Modal({ isOpen, onClose, isLoading=false, isWhiteButton=true,
    isBlueButton=false, blueButtonText="", blueButtonAction = () => {},
    children }) {
    const dialog = useRef();

    useEffect(() => {
        if (isOpen && !dialog.current.open) dialog.current.showModal();
        else if (!isOpen && dialog.current.open) dialog.current.close();
    }, [isOpen]);

    // Обробка натиску "ESC" (за замовчуванням закриває модалку)
    function handleCancel(e) {
        if (isLoading)
            e.preventDefault();
    }

    return createPortal(<dialog className="modal" ref={dialog} onClose={onClose} onCancel={handleCancel}>
        <div className="modal-info">
            {children}
            <div className="modal-buttons">
                <InputRow>
                    {isWhiteButton && <Button onClick={onClose} disabled={isLoading}>ОК</Button>}
                    {isBlueButton && <Button isBlue={true} onClick={blueButtonAction} disabled={isLoading}>{blueButtonText}</Button>}
                </InputRow>
            </div>
        </div>
    </dialog>, document.body);
}

export default Modal;