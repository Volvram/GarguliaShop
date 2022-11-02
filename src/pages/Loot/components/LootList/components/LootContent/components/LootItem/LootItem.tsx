import React from "react";

import { formatCurrency } from "@config/currencies";
import { EquipmentType } from "@config/equipment";

import styles from "./styles.module.scss";

type LootItemType = {
  item: EquipmentType;
};

const LootItem: React.FC<LootItemType> = ({ item }) => {
  return (
    <div className={styles.lootItem}>
      <img src={item.image} className={styles.lootItem_img} />
      <div className={styles.lootItem_info}>
        <div className={styles.lootItem_info_title}>{item.title}</div>
        <div className={styles.lootItem_info_description}>
          {item.description}
        </div>
      </div>
      <div className={styles.lootItem_price}>
        {formatCurrency(item.price, item.currency)}
      </div>
    </div>
  );
};

export default LootItem;
