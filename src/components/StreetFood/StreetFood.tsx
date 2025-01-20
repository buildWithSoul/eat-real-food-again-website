import { Box, Button, Image, Text, Title } from "@mantine/core";
import styles from "./StreetFood.module.css";

const StreetFood = () => {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.leftHero}>
        <Box>
          <Text className={styles.heroSubText}>Food cooked in healthy oil</Text>
          <Title className={styles.heroTitle} order={2}>
            Introducing Real <br />
            <span className={styles.greenText}>Street Food</span>
          </Title>
        </Box>

        <Text className={styles.heroBodyText}>
          Find food from prepared food vendors cooking their food in healthy oil and using healthy ingredients.
        </Text>

        <Box className={styles.leftHeroBottom}>
          <Button classNames={{ root: styles.heroButton }} variant="unstyled" disabled>
            Coming Soon..
          </Button>
        </Box>
      </Box>

      <Box className={styles.rightHero}>
        <Box className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            src="/street-food.svg"
            alt="Street Food"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StreetFood;
