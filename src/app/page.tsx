import { Title } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Title>Home</Title>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
