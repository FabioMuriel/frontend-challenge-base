import styles from "./styles.module.css";
import { HeaderOption, LoginButton } from "@/app/components";

interface ContentMenuBurgerProps {
    isOpen: boolean;
    menuItems: {
        name: string;
        href: string;
    }[];
}

export default function ContentMenuBurger({ isOpen, menuItems }: ContentMenuBurgerProps): JSX.Element {
    return (
        <aside className={`${styles.contentMenuBurger} ${isOpen ? styles.open : styles.close}`}>
            <ul className={styles.contentMenuBurgerList}>
                {menuItems.map((item) => (
                    <HeaderOption key={item.name} name={item.name} href={item.href} />
                ))}
            </ul>


            <div className={styles.loginButtonContainer}>
                <LoginButton />
            </div>

        </aside>
    );
}