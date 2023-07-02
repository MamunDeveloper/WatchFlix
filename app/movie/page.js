import Link from "next/link";
import React from "react";
import styles from "@/app/styles/common.module.css";
import Moviecard from "../components/moviecard";
import { resolve } from "styled-jsx/css";

const page = async () => {
  const url = process.env.RAPID_KEY;
  // await new Promise(resolve=> setTimeout(resolve, 1500))

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d8d1b5b4eemshda3692cbdf654a5p128ed5jsn60b3c0d9c7c7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = await data.titles;

  return (
    <section className={styles.movieSection}>
      <h1>Movies & series</h1>
      <div className={styles.container}>
        {main_data.map((item) => {
          return <Moviecard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default page;
