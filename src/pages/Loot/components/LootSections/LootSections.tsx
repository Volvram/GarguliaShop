import React from "react";

import { LOOT_SECTIONS } from "@config/lootSections";
import rootStore from "@store/RootStore/instance";
import cn from "classnames";
import { useSearchParams } from "react-router-dom";

import styles from "./styles.module.scss";

const LootSections: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const initialSection = rootStore.query.getParam("loot-section");

    if (!initialSection) {
      searchParams.set("loot-section", `${LOOT_SECTIONS[0].id}`);
      setSearchParams(searchParams);
      window.scrollTo(0, 0);
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className={styles.lootSections}>
      {LOOT_SECTIONS.map((lootSection) => {
        return (
          <div
            onClick={() => {
              searchParams.set("loot-section", `${lootSection.id}`);
              setSearchParams(searchParams);
              window.scrollTo(0, 0);
            }}
            key={lootSection.id}
            className={cn(
              styles.lootSections_lootSection,
              lootSection.id === rootStore.query.getParam("loot-section") &&
                styles.lootSections_lootSection_selected,
              !rootStore.query.getParam("loot-section") &&
                lootSection.id === LOOT_SECTIONS[0].id &&
                styles.lootSections_lootSection_selected
            )}
          >
            {lootSection.name}
          </div>
        );
      })}
    </div>
  );
};

export default LootSections;
