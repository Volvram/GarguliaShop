import React from "react";

import { SERVICES } from "@config/services";

import ServicesItem from "./components/ServicesItem/ServicesItem";
import styles from "./styles.module.scss";

const ServicesContent: React.FC = () => {
  return (
    <div className={styles.servicesContent}>
      {SERVICES.map((service) => {
        return <ServicesItem key={service.id} service={service} />;
      })}
    </div>
  );
};

export default ServicesContent;
