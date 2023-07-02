import herostyle from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

function Herosection({ title, imageUrl }) {
  return (
    <main className={herostyle.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={herostyle.hero_content}>
            <h1>{title}</h1>
            <p>
            From award-winning drama to hit action films, we cover you. Browse our section of the newest films and find your favourite today.
            </p>
            <Link href={"/movie"}>
              <button className={mulish.className}>Explore movies</button>
            </Link>
          </div>
          <div className={herostyle.hero_image}>
            <Image
              src={imageUrl}
              alt="Watcinh netflix"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      <div className={herostyle.custom_shape_divider_bottom_1688153462}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={herostyle.shape_fill}
          ></path>
        </svg>
      </div>
    </main>
  );
}

export default Herosection;
