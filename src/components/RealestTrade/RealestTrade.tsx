import { Box, Button, Image, Text, Title } from "@mantine/core";
import styles from "./RealestTrade.module.css";

const RealestTrade = () => {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.leftHero}>
        <Box>
          <Text className={styles.heroSubText}>
            Farmer driven verification{" "}
          </Text>
          <Title className={styles.heroTitle} order={2}>
            Introducing <br />
            <span className={styles.greenText}>RealestTrade</span>
          </Title>
        </Box>

        <Text className={styles.heroBodyText}>
          The first certification where farmers certify they are not being
          exploited.
        </Text>

        <Box className={styles.leftHeroBottom}>
          <Button classNames={{ root: styles.heroButton }} variant="unstyled">
            Add it now
          </Button>
        </Box>
      </Box>

      <Box className={styles.rightHero}>
        <Box className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            src="/realest-trade.svg"
            alt="Realest Trade"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RealestTrade;
