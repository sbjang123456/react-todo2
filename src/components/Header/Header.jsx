import React from "react";
import styles from "./Header.module.css";

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.filteres}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
