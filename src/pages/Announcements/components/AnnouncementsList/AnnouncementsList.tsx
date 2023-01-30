import React from "react";

import background_announcements from "@assets/img/background_announcements.jpg";
import { ANNOUNCEMENTS } from "@config/announcements";

import styles from "./styles.module.scss";

const AnnouncementsList: React.FC = () => {
  return (
    <div
      className={styles.announcementsList}
      style={{ backgroundImage: `url(${background_announcements})` }}
    >
      {ANNOUNCEMENTS.map((announcement) => {
        return (
          <div
            key={announcement.id}
            className={styles.announcementsList_announcement}
          >
            <div className={styles.announcementsList_announcement_h}>
              {announcement.name}
            </div>
            <div className={styles.announcementsList_announcement_description}>
              {announcement.description}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnnouncementsList;
