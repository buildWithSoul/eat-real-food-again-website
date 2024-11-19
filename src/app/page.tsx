import MissionStatement from "@/components/MissionStatement/MissionStatement";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <MissionStatement />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
