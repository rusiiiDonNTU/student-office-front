import defaultPfp from "/img/default-pfp-white.png";
import "./ProfilePerson.css";
import Skeleton from "../../UI/Skeleton/Skeleton";

function ProfilePerson({ pib=null, age=null, pfp=null, skeleton=false }) {
    if (skeleton) {
        return <div className="profile-person">
            <div className="profile-person-picture">
                <Skeleton height="6rem" width="6rem"/>
            </div>
            <div className="profile-person-info">
                <span className="profile-person-name">
                    <Skeleton height="1rem" width="10rem"/>
                </span>
                <span className="profile-person-age">
                    <Skeleton height="1rem" width="6rem"/>
                </span>
            </div>
        </div>
    }
    else {
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
}

export default ProfilePerson;