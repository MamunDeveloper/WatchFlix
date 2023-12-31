import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { resolve } from "styled-jsx/css";

function Moviecard (item) {
  const { id, title, type, synopsis } = item.jawSummary;

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={item.jawSummary.backgroundImage.url}
          alt={title}
          width={260}
          height={200}
        />
      </div>

      <div className={styles.card_data}>
        <h2>{title.substring(0, 20)}</h2>
        <p>{synopsis.substring(0, 65)}...</p>
        <Link href={`/movie/${id}`}>
          <button>Read more</button>
        </Link>
      </div>
    </div>
  );
}

export default Moviecard;
