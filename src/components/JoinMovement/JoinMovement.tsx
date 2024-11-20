import { Box, Image, Text, Title } from "@mantine/core";
import styles from "./JoinMovement.module.css";

const JoinMovement = () => {
  return (
    <Box className={styles.joinMovement}>
      <Box className={styles.leftSection}>
        <Text className={styles.sectionSubtitle}>Join the Movement For</Text>
        <Title className={styles.sectionTitle} order={2}>
          Civilian Owned Food Systems
        </Title>
        <Image
          className={styles.imageMobile}
          src={
            "https://s3-alpha-sig.figma.com/img/311b/cfd2/6115b1b1b1cff5b11175c3cb04c98302?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sj-1wOG9mNcd7Aup805KCIhY~5YAgECKT2stDKMUoPWh1XhNIchSS5moOsqXx4RzyEuYx4RiIOqEc86gbYJyiwQ7rzNXdgFlNJlZ8jiRRPdWh9nQUb3su8mMdLvXsnFds5PNk4lwAtRrn6FNUrVJnL0P3JCo1VErgnf8ksXGdjaq-jE4-MndiAT3cFq~IZbIPoBc-jJmJyA7EeJWXWL8TinQnqyaYlwyI4q0Tmx2d7ob6IYP~uRSXiatNzFGHr6Usnd~~I5XXUjb8I9Vu4krKDYzUGeS0Siry8M8iU7Lqx9UHv1qZCrdCZH3HtXmCoDRHVp3oBGHBDvh4aHZV0GusQ__"
          }
          alt="join movement"
        />
        <Box className={styles.quoteOuterBox}>
          <Box className={styles.quoteBox}>
            <Image
              className={styles.quoteIcon}
              src={"/icon-quotes.svg"}
              alt="quote"
            />
            <Text className={styles.quoteText}>
              To make anything happen in America, you don’t need to rock the
              vote, you need to rock the market share.
            </Text>
          </Box>
          <Text className={styles.quoteAuthor}>-Delly Soul</Text>
        </Box>
      </Box>
      <Box className={styles.rightSection}>
        <Image
          className={styles.imageDesktop}
          src={
            "https://s3-alpha-sig.figma.com/img/311b/cfd2/6115b1b1b1cff5b11175c3cb04c98302?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sj-1wOG9mNcd7Aup805KCIhY~5YAgECKT2stDKMUoPWh1XhNIchSS5moOsqXx4RzyEuYx4RiIOqEc86gbYJyiwQ7rzNXdgFlNJlZ8jiRRPdWh9nQUb3su8mMdLvXsnFds5PNk4lwAtRrn6FNUrVJnL0P3JCo1VErgnf8ksXGdjaq-jE4-MndiAT3cFq~IZbIPoBc-jJmJyA7EeJWXWL8TinQnqyaYlwyI4q0Tmx2d7ob6IYP~uRSXiatNzFGHr6Usnd~~I5XXUjb8I9Vu4krKDYzUGeS0Siry8M8iU7Lqx9UHv1qZCrdCZH3HtXmCoDRHVp3oBGHBDvh4aHZV0GusQ__"
          }
          alt="join movement"
        />
      </Box>
    </Box>
  );
};

export default JoinMovement;
