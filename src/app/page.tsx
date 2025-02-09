import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
// import JoinMovement from "@/components/JoinMovement/JoinMovement";
// import MissionStatement from "@/components/MissionStatement/MissionStatement";
import Goals from "@/components/Goals/Goals";
import Healla from "@/components/Healla/Healla";
import RealestTrade from "@/components/RealestTrade/RealestTrade";
import StreetFood from "@/components/StreetFood/StreetFood";
// import Auth from "@/components/Auth/Auth";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        {/*<MissionStatement /> 
         <JoinMovement />*/}
        <Goals />
        <Healla />
        <RealestTrade />
        <StreetFood />
        {/*<Auth />*/}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
