import Image from "next/image";
import userIcon from "@/assets/icons/UserIcon.svg";
import styles from "./styles.module.css";

export default function LoginButton() {
    return (
        <div>
            <button className={styles.loginButton}>
                <Image src={userIcon} alt="User Icon" width={35} height={35} />
            </button>
        </div>
    )
}