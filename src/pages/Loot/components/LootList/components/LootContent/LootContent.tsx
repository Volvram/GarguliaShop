import React from "react";

import { EQUIPMENT } from "@config/equipment";

import LootItem from "./components/LootItem/LootItem";
import styles from "./styles.module.scss";

const LootContent: React.FC = () => {
  return (
    <div className={styles.lootContent}>
      {EQUIPMENT.map((item) => {
        return <LootItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default LootContent;
