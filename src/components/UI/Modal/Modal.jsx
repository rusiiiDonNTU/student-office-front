import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import Button from "../Button/Button";
import closeImg from "/icons/nav/close.png";

function Modal({ isOpen, onClose, isButton=true, children }) {
    const dialog = useRef();

    useEffect(() => {
        if (isOpen && !dialog.current.open) dialog.current.showModal();
        else if (!isOpen && dialog.current.open) dialog.current.close();
    }, [isOpen]);

    return createPortal(<dialog className="modal" ref={dialog} onClose={onClose}>
        <div className="modal-info">
            {children}
            {isButton && <Button className="modal-button" onClick={onClose}>ОК</Button>}
        </div>
    </dialog>, document.body);
}

export default Modal;