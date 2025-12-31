import InputRow from "../../InputRow/InputRow";
import "./ModalButtons.css";

function ModalButtons({ children }) {
    return <div className="modal-buttons">
        <InputRow>
            {children}
        </InputRow>
    </div>
}

export default ModalButtons;