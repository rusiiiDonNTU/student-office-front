import "./PageCard.css";

export function PageCard({ className='', header, children }) {
    return <section className={`page-card ${className}`}>
        <div className="page-card-header">
            <h1>{header}</h1>
        </div>
        {children}
    </section>
}