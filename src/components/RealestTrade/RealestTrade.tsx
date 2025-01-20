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
            <span className={styles.greenText}>Realest Trade</span>
          </Title>
        </Box>

        <Text className={styles.heroBodyText}>
           A new standard for the international food supply chain ensuring farmers are treated fairly and consumer health is priotized.        
          </Text>

        <Box className={styles.leftHeroBottom}>
          <Button classNames={{ root: styles.heroButton }} variant="unstyled" disabled>
            Coming Soon
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
