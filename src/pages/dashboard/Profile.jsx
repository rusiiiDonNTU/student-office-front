import "./Profile.css"

function ProfilePage() {
  return (
    <section className="profile">
      <section>
        <h3 className="profile-section-header">Студент</h3>

      </section>
      <div className="profile-sections-row">
        <section>
          <h3 className="profile-section-header">Освіта</h3>
        </section>
        <section>
          <h3 className="profile-section-header">Навчання</h3>
        </section>
      </div>
    </section>
  );
}

export default ProfilePage;