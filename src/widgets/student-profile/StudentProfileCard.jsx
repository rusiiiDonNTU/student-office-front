import { useNavigate } from "react-router-dom";
import { StudentPerson, StudentStatus, StudentEducation, StudentEntryInfo, StudentTerms, getStudent } from "../../entities/student";
import { RefreshModal } from "../../shared/ui";

export function StudentProfileCard() {
    const { data: user, isPending, isFetching, isError, error, isFetched, refetch } = getStudent();

    const navigate = useNavigate();
    if (isError) {
        if (error.status === 401) {
          navigate("/login")
        }
        if (error.status === 404) {
          navigate("/logout")
        }
    }

    const isNoData = !user || typeof user !== "object";
  
    if (isNoData) {
        return <>
            {!isFetching && <RefreshModal refetch={refetch}/>}
            <StudentProfileCardSkeleton />
        </>
    }

    const words = {
        one: t("profile:years.one"),
        few: t("profile:years.few"),
        many: t("profile:years.many"),
        other: t("profile:years.other")
    }

    const pib = user.lastName + " " + user.firstName + " " + user.middleName;
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

    return <div className="profile-content">
        <StudentPerson pib={pib}
          age={age}
          pfp={pfp}/>

        <StudentStatus specialtyCode={specialtyCode}
          specialtyName={specialtyName}
          group={group}
          course={course}/>

        <hr className="profile-hr"/>

        <StudentEducation faculty={faculty}
        educationProgram={educationProgram}
          specialtyName={specialtyName}/>

        <hr className="profile-hr"/>

        <StudentEntryInfo educationLevel={educationLevel}
          studyForm={studyForm} />

        <StudentTerms entryBasis={entryBasis}
          entryDate={entryDate}
          fundingSource={fundingSource}/>
    </div>
}