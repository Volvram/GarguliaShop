import React from "react";

import { EQUIPMENT, EquipmentType } from "@config/equipment";

import LootItem from "./components/LootItem/LootItem";
import styles from "./styles.module.scss";

type LootContentType = {
  currentItems: EquipmentType[] | null;
}

const LootContent: React.FC<LootContentType> = ({currentItems}) => {
  return (
    <div className={styles.lootContent}>
      {currentItems && currentItems.map((item) => {
        return <LootItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default LootContent;
