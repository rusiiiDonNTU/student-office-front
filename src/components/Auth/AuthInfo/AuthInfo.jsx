import "./AuthInfo.css";

function AuthInfo({infoType}) {
  if (infoType === 1) {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          Маючи доступ до кабінету, ви отримуєте:
        </h1>
        <ul className="auth-info-list">
          <li>Повний доступ до особистої інформації в системі ДонНТУ</li>
          <li>Можливість обирати нові дисципліни</li>
          <li>Дані щодо академічної успішності</li>
          <li>Календар з актуальним розкладом занять</li>
        </ul>
      </section>
    );
  } else {
    return (
      <section className="auth-info">
        <h1 className="auth-info-logo">
          Вимоги до реєстрації акаунту:
        </h1>
        <ul className="auth-info-list">
          <li>Пошта може бути як корпоративною, так і особистою</li>
          <li>Довжина паролю: 8-16 символів</li>
          <li>Пароль має містити (мінімум): 
            <ul className="auth-info-nested-list">
              <li>1 маленьку літеру</li>
              <li>1 велику літеру</li>
              <li>1 цифру</li>
              <li>1 спец. символ</li>
            </ul>
          </li>
          <li>Надати потрібно хоча б один з наведених документів.</li>
        </ul>
      </section>
    );
  }
}

export default AuthInfo;
