import "./Profile.css"
import ProfilePerson from "../../../components/Profile/ProfilePerson/ProfilePerson";
import ProfileStatus from "../../../components/Profile/ProfileStatus/ProfileStatus";
import ProfileEducation from "../../../components/Profile/ProfileEducation/ProfileEducation";
import ProfileTerms from "../../../components/Profile/ProfileTerms/ProfileTerms";
import ProfileEntryInfo from "../../../components/Profile/ProfileEntryInfo/ProfileEntryInfo";
import { useTranslation } from "react-i18next";

function ProfileSkeleton() {
  const { t } = useTranslation("profile");

  return (
    <section className="profile">
      <div className="profile-header">
        <h1>{t("profile:header")}</h1>
      </div>

      <div className="profile-content">
        <ProfilePerson skeleton={true}/>

        <ProfileStatus skeleton={true}/>

        <hr className="profile-hr"/>

        <ProfileEducation skeleton={true}/>

        <hr className="profile-hr"/>

        <ProfileTerms skeleton={true}/>

        <ProfileEntryInfo skeleton={true}/>
      </div>
    </section>
  );
}

export default ProfileSkeleton;