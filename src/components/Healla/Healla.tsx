import { Box, Button, Image, Text, Title } from "@mantine/core";
import styles from "./Healla.module.css";

const Healla = () => {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.leftHero}>
        <Box>
          <Text className={styles.heroSubText}>Food as Medicine</Text>
          <Title className={styles.heroTitle} order={2}>
            Introducing <br />
            <span className={styles.greenText}>Healla</span>
          </Title>
        </Box>

        <Text className={styles.heroBodyText}>
          Information platform for Americans who have improved their own
          wellness and longevity by eating real food.
        </Text>

        <Box className={styles.leftHeroBottom}>
          <Button classNames={{ root: styles.heroButton }} variant="unstyled">
            Learn More
          </Button>
        </Box>
      </Box>

      <Box className={styles.rightHero}>
        <Box className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            src="/healla.svg"
            alt="Food as Medicine"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Healla;
