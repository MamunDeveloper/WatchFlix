import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./nav";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image id={styles.logo} src="/owl.one.svg" alt="WatchFlix" width={65} height={70} />
        </Link>
        <Link href={"/"} className={mulish.className} id={styles.logo_text}>
          WatchFlix
        </Link>
      </div>

      <Nav></Nav>
    </header>
  );
}

export default Header;
