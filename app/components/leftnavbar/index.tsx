import styles from "../../../styles/leftnavbar.module.css";
import educraftlogo from "../../../public/educraftlogo.png";
import Image from "next/image";
import Link from "next/link";
import { HomeAlt1, TrashCan } from "akar-icons";

export default function LeftNavBar() {
  return (
    <nav className={styles.leftnavbar}>
      <div>
        <Image
          src="/educraftlogo.png"
          width={200}
          height={500}
          priority
          className={styles.logo}
          alt="EduCraft Logo"
        />
      </div>
      <ul>
        <li>
          <Link href="/dashboard">
            <div className={`${styles.navelement} ${styles.active}`}>
              <HomeAlt1 strokeWidth={1} size={32} />
              <div>My EduCrafts</div>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/trash">
            {" "}
            <div className={styles.navelement}>
              <TrashCan strokeWidth={1} size={32} />
              <div>Trash</div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
