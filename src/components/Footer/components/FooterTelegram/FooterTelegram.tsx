import React from "react";

import telegram from "@assets/img/telegram.png";

import styles from "./styles.module.scss";

const FooterTelegram: React.FC = () => {
  return (
    <div className={styles.telegram}>
      <a href="https://t.me/nextGARGYLIA">
        <img
          src={telegram}
          className={styles.telegram_img}
          alt="https://t.me/nextGARGYLIA"
        />
      </a>
      <div className={styles.telegram_h}>Вступайте в телеграм канал</div>

      <div className={styles.telegram_channel}>
        <a href="https://t.me/nextMETRO" className={styles.telegram_channel_a}>
          https://t.me/nextMETRO
        </a>
      </div>
    </div>
  );
};

export default FooterTelegram;
