import { redirect, useLoaderData } from "react-router-dom";
import "./Profile.css"
import { useTranslation } from "react-i18next";
import api from "../../../util/axios";
import { formatBirthDate, formatDate } from "../../../util/formation";
import ProfilePerson from "../../../components/Profile/ProfilePerson/ProfilePerson";
import ProfileStatus from "../../../components/Profile/ProfileStatus/ProfileStatus";
import ProfileTerms from "../../../components/Profile/ProfileTerms/ProfileTerms";
import ProfileEntryInfo from "../../../components/Profile/ProfileEntryInfo/ProfileEntryInfo";
import ProfileEducation from "../../../components/Profile/ProfileEducation/ProfileEducation";


function ProfilePage() {
  const user = useLoaderData();
  const { t } = useTranslation("profile");

  const words = {
      one: t("profile:years.one"),
      few: t("profile:years.few"),
      many: t("profile:years.many"),
      other: t("profile:years.other")
  }
  
  const pib = user.firstName + " " + user.lastName + " " + user.middleName;
  const age = formatBirthDate(user.birthDate, words);
  const pfp = null;

  const specialtyCode = user.specialtyCode;
  const group = user.groupName;
  const course = user.course;

  const specialtyName = user.specialtyName;
  const educationProgram = user.educationProgram;
  const faculty = user.faculty;

  const studyForm = user.studyForm;
  const fundingSource = user.fundingSource;
  const educationLevel = user.educationLevel;

  const entryBasis = user.entryBasis;
  const entryDate = formatDate(user.entryDate);

  return (
    <section className="profile">
      <div className="profile-header">
        <h1>{t("profile:header")}</h1>
      </div>

      <div className="profile-content">
        <ProfilePerson pib={pib}
          age={age}
          pfp={pfp}/>

        <ProfileStatus specialtyCode={specialtyCode}
          specialtyName={specialtyName}
          group={group}
          course={course}/>

        <hr className="profile-hr"/>

        <ProfileEducation faculty={faculty}
        educationProgram={educationProgram}
          specialtyName={specialtyName}/>

        <hr className="profile-hr"/>

        <ProfileTerms educationLevel={educationLevel}
          studyForm={studyForm} />

        <ProfileEntryInfo entryBasis={entryBasis}
          entryDate={entryDate}
          fundingSource={fundingSource}/>
      </div>
    </section>
  );
}

export default ProfilePage;

export async function profileLoader() {
  try {
    const response = await api.get("/profile")
    return response.data;
  }
  catch (err) {
    if (err.response) {
      if (err.response.status === 401) {
        return redirect('/logout')
      }
      else if (err.response.status === 404) {
        return redirect('/login')
      }
    }
    throw new Response(
      { message: "Сервер не надав відповіді" },
      { status: 500 }
    );
  }
}