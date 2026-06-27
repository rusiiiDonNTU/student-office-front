import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export function Modal({ isOpen, onClose = () => {}, cancelling=true, isLoading=false, children, ...props }) {
    const dialog = useRef();

    useEffect(() => {
        if (isOpen && !dialog.current.open) dialog.current.showModal();
        else if (!isOpen && dialog.current.open) dialog.current.close();
    }, [isOpen]);

    // Обробка натиску "ESC" (за замовчуванням закриває модалку)
    function handleCancel(e) {
        if (isLoading || !cancelling)
            e.preventDefault();
    }

    return createPortal(<dialog className="modal" ref={dialog} onClose={onClose} onCancel={handleCancel} {...props}>
        <div className="modal-info">
            {children}
        </div>
    </dialog>, document.body);
}