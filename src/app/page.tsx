import MissionStatement from "@/components/MissionStatement/MissionStatement";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import JoinMovement from "@/components/JoinMovement/JoinMovement";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <MissionStatement />
        <JoinMovement />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
