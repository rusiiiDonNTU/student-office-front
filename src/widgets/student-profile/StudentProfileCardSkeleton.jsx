import { StudentPerson, StudentStatus, StudentEducation, StudentEntryInfo, StudentTerms } from "@/entities/student";

export function StudentProfileCardSkeleton() {
  return (
    <div className="profile-content">
      <StudentPerson skeleton={true}/>

      <StudentStatus skeleton={true}/>

      <hr className="profile-hr"/>

      <StudentEducation skeleton={true}/>

      <hr className="profile-hr"/>

      <StudentEntryInfo skeleton={true}/>

      <StudentTerms skeleton={true}/>
    </div>
  );
}