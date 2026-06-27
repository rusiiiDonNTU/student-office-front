import "./ErrorText.css"

export function ErrorText({ children }) {
    return <p className="error-text">
        {children}
    </p>
}