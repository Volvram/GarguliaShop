import React from "react";

import { SECTIONS } from "@config/sections";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_shop}>GARGULIA'S SHOP</div>
      <div className={styles.header_sections}>
        {SECTIONS.map((section) => {
          return (
            <Link
              to={section.path}
              key={section.id}
              className={styles.header_sections_section}
            >
              {section.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
