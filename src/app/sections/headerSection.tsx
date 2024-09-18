"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import logoQuickBet from "@/assets/icons/LogoQuickBet.png";
import { BurgerMenu, ContentMenuBurger, LoginButton, HeaderOption } from "@/app/components";

export default function HeaderSection(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "Popular",
      href: "/popular",
    },
    {
      name: "Favorites",
      href: "/favorites",
    },
  ];

  return (
    <header className={styles.headerStyles}>
      <div className={styles.headerContent}>
        <Image src={logoQuickBet} alt="Logo QuickBet" />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <ContentMenuBurger isOpen={isOpen} menuItems={menuItems} />

        <nav className={`${styles.navStyles}`}>
          <ul>
            {menuItems.map((item) => (
              <HeaderOption key={item.name} name={item.name} href={item.href} />
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.loginButton}>
        <LoginButton />
      </div>

    </header>
  );
}
