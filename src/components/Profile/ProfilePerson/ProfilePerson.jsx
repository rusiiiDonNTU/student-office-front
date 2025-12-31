import defaultPfp from "/img/default-pfp-white.png";
import "./ProfilePerson.css";

function ProfilePerson({ pib, age, pfp=null }) {
    return <div className="profile-person">
        <div className="profile-person-picture">
            <img src={pfp === null ? defaultPfp : pfp}/>
        </div>
        <div className="profile-person-info">
            <span className="profile-person-name">{pib}</span>
            <span className="profile-person-age">{age}</span>
        </div>
    </div>
}

export default ProfilePerson;