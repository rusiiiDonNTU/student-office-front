import "./ErrorList.css";

function ErrorList({ h, l }) {
    return <div className="errorlist">
        <p className="errorlist-header">{h}</p>
        <ul className="errorlist-ul">
            {l.map((err) => <li key={err}>{err}</li>)}
        </ul>
    </div>
}

export default ErrorList;