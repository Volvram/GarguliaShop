import React from "react";

import styles from "./styles.module.scss";

const FooterPayment: React.FC = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.payment_h}>Платёж принимается</div>
      <div className={styles.payment_countries}>
        <div className={styles.payment_countries_country}>
          <li className={styles.payment_countries_country_h}>
            Российская Федерация:
          </li>
          <li className={styles.payment_countries_country_pay}>Qiwi кошелёк</li>
          <li className={styles.payment_countries_country_pay}>
            Сбербанк онлайн
          </li>
        </div>
        <div className={styles.payment_countries_country}>
          <li className={styles.payment_countries_country_h}>
            Республика Казахстан:
          </li>
          <li className={styles.payment_countries_country_pay}>Kaspi bank</li>
          <li className={styles.payment_countries_country_pay}>Halyk bank</li>
        </div>
      </div>
    </div>
  );
};

export default FooterPayment;
