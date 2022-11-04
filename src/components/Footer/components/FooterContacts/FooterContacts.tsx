import React from "react";

import styles from "./styles.module.scss";

const FooterContacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_h}>Контакты</div>
      <div className={styles.contacts_countries}>
        <div className={styles.contacts_countries_country}>
          <li className={styles.contacts_countries_country_h}>
            Российская Федерация:
          </li>
          <li className={styles.contacts_countries_country_contact}>
            Телеграм:{" "}
            <a
              href="https://web.telegram.org/k/#@next_gargylia"
              className={styles.contacts_countries_country_contact_a}
            >
              @next_gargylia
            </a>
          </li>
        </div>
        <div className={styles.contacts_countries_country}>
          <li className={styles.contacts_countries_country_h}>
            Республика Казахстан:
          </li>
          <li className={styles.contacts_countries_country_contact}>
            Телеграм:{" "}
            <a
              href="https://web.telegram.org/k/#@codMADARA"
              className={styles.contacts_countries_country_contact_a}
            >
              @codMADARA
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
