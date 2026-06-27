import { InputRow } from "@/shared/ui";
import "./ModalButtons.css";

export function ModalButtons({ children }) {
    return <div className="modal-buttons">
        <InputRow>
            {children}
        </InputRow>
    </div>
}