import "./Profile.css"
import ProfilePerson from "../../../components/Profile/ProfilePerson/ProfilePerson";
import ProfileStatus from "../../../components/Profile/ProfileStatus/ProfileStatus";
import ProfileEducation from "../../../components/Profile/ProfileEducation/ProfileEducation";
import ProfileTerms from "../../../components/Profile/ProfileTerms/ProfileTerms";
import ProfileEntryInfo from "../../../components/Profile/ProfileEntryInfo/ProfileEntryInfo";
import { useTranslation } from "react-i18next";
import PageCard from "../../../components/UI/PageCard/PageCard";

function ProfileSkeleton() {
  const { t } = useTranslation("profile");

  return (
    <PageCard className="profile" header={t("profile:header")}>
      <div className="profile-content">
        <ProfilePerson skeleton={true}/>

        <ProfileStatus skeleton={true}/>

        <hr className="profile-hr"/>

        <ProfileEducation skeleton={true}/>

        <hr className="profile-hr"/>

        <ProfileTerms skeleton={true}/>

        <ProfileEntryInfo skeleton={true}/>
      </div>
    </PageCard>
  );
}

export default ProfileSkeleton;