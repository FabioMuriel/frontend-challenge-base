import Link from "next/link";
import styles from "./styles.module.css";

interface HeaderOptionProps {
    name: string;
    href: string;
}

export default function HeaderOption({ name, href }: HeaderOptionProps) {
    return (
        <li className={styles.headerOption}>
            <Link className={styles.headerOptionLink} href={href}>
                {name}
            </Link>
        </li>
    );
}