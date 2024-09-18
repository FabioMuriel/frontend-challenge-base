import React from "react";
import styles from "./styles.module.css";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps): JSX.Element {
  return (
    <div className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
      <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
      <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
      <div className={`${styles.line} ${isOpen ? styles.lineOpen : ''}`}></div>
    </div>
  );
}