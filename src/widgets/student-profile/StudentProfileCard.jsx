import { useNavigate } from "react-router-dom";
import { StudentPerson, StudentStatus, StudentEducation, StudentEntryInfo, StudentTerms, useStudent } from "@/entities/student";
import { RefreshModal } from "@/shared/ui";
import { StudentProfileCardSkeleton } from "./StudentProfileCardSkeleton";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function StudentProfileCard() {
    const { t, i18n } = useTranslation();
    const { data: user, isPending, isFetching, isError, error, isFetched, refetch } = useStudent(i18n.language);
    const navigate = useNavigate();

    useEffect(() => {
      if (isError) {
          if (error?.status < 500) {
            navigate("/logout")
          }
      }
    }, [isError, error, navigate])

    const isNoData = !user || typeof user !== "object";
  
    if (isNoData) {
        return <>
            {!isFetching && <RefreshModal refetch={refetch}/>}
            <StudentProfileCardSkeleton />
        </>
    }

    return <div className="profile-content">
        <StudentPerson user={user}/>
        <StudentStatus user={user}/>

        <hr className="profile-hr"/>

        <StudentEducation user={user}/>

        <hr className="profile-hr"/>

        <StudentTerms user={user}/>
        <StudentEntryInfo user={user} />
    </div>
}