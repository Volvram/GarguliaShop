import React from "react";

import FooterContacts from "./components/FooterContacts/FooterContacts";
import FooterPayment from "./components/FooterPayment/FooterPayment";
import FooterTelegram from "./components/FooterTelegram/FooterTelegram";
import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <FooterPayment />
      <FooterContacts />
      <FooterTelegram />
    </div>
  );
};

export default Footer;
