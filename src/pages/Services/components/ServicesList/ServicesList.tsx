import React from "react";

import background_2 from "@assets/img/background_2.jpg";

import styles from "./styles.module.scss";

const ServicesList: React.FC = () => {
  return (
    <div
      className={styles.servicesList}
      style={{ backgroundImage: `url(${background_2})` }}
    ></div>
  );
};

export default ServicesList;
