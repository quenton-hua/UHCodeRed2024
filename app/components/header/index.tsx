import styles from "../../../styles/header.module.css";
import {Person, ChevronDown } from "akar-icons";

export default function Header() {
  return <nav className={styles.header}>
    <div className={styles.page_title}><h1>Your Quizzes</h1></div>
    <div className={styles.profile}>
    <Person strokeWidth={2} size={32} />
    <div>
        <h3>Quenton Hua</h3>
        <p>hua.quenton@gmail.com</p>
    </div>
    <ChevronDown strokeWidth={1} size={25} />
    </div>
    </nav>;
}
