import React from "react";

import { SECTIONS } from "@config/sections";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.header_shop}>GARGULIA'S SHOP</div>
      <div className={styles.header_sections}>
        {SECTIONS.map((section, index) => {
          const path = section.path;

          return (
            <Link
              to={section.path}
              key={section.id}
              className={cn(
                styles.header_sections_section,
                path === location.pathname &&
                  styles.header_sections_section__selected
              )}
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
