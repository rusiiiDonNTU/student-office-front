import "./Skeleton.css";

function Skeleton({width="5rem", height="1rem"}) {
    return <div className="skeleton" style={{width: width, height: height}}/>
}

export default Skeleton;