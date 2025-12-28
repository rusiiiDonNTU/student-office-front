import { useLoaderData } from "react-router-dom";
import "./Profile.css"
import { useTranslation } from "react-i18next";

function ProfilePage() {
  const load = useLoaderData();
  const { t } = useTranslation();
  
  return (
    <section className="profile">
      <div>
        <section className="profile-person">
          <img />
          <div>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>
      <div>
        <section className="profile-education">

        </section>
      </div>
    </section>
  );
}

export default ProfilePage;