import React from "react";

import background_1 from "@assets/img/background_1.htm";

import styles from "./styles.module.scss";

const LootList: React.FC = () => {
  return (
    <div
      className={styles.lootList}
      style={{ backgroundImage: `url(${background_1})` }}
    ></div>
  );
};

export default LootList;
