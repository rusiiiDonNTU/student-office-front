import { useState } from "react";

export function useModal() {
    const [isOpen, setIsOpen] = useState(true);
    
    function handleClose() {
        setIsOpen(false)
    }

    return [isOpen, setIsOpen, handleClose];
}