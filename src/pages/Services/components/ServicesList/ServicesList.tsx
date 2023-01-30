import React from "react";

import background_services from "@assets/img/background_services.jpg";

import ServicesContent from "./components/ServicesContent/ServicesContent";
import styles from "./styles.module.scss";

const ServicesList: React.FC = () => {
  return (
    <div
      className={styles.servicesList}
      style={{ backgroundImage: `url(${background_services})` }}
    >
      <ServicesContent />
    </div>
  );
};

export default ServicesList;
