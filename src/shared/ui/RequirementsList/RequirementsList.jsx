import "./RequirementsList.css";

export function RequirementsList({ requirements }) {
    return <div className="requirements-list-block">
        <ul className="requirements-list">
            {requirements.map(req => {
                return <li key={req.item} className={`requirements-item${req.done ? " done" : ""}`}>
                    {req.item}
                </li>
            })}
        </ul>
    </div>
}