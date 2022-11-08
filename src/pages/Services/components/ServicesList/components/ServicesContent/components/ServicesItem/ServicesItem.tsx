import React from "react";

import { formatCurrency } from "@config/currencies";
import { ServicesType } from "@config/services";

import styles from "./styles.module.scss";

type ServicesItemProps = {
  service: ServicesType;
};

const ServicesItem: React.FC<ServicesItemProps> = ({ service }) => {
  return (
    <div className={styles.servicesItem}>
      <div className={styles.servicesItem_title}>
        <strong>{service.title}</strong>
      </div>
      <div className={styles.servicesItem_description}>
        {service.description}
      </div>
      <div className={styles.servicesItem_price}>
        {formatCurrency(service.price, service.currency)}
      </div>
    </div>
  );
};

export default ServicesItem;
