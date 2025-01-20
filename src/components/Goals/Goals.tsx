import { Box, Button, Image, Text, Title } from "@mantine/core";
import styles from "./Goals.module.css";

const Goals = () => {
  return (
    <Box className={styles.goals}>
      <Box className={styles.textContainer}>
        <Text className={styles.sectionSubtitle}>Goals</Text>
        <Title className={styles.sectionTitle} order={2}>
          By 2030 we want to revitalize the food system in the Americas.
        </Title>
        <Text className={styles.sectionDescription}>
        </Text>
      </Box>

      <Box className={styles.cardsContainer}>
        <Box className={styles.card}>
          <Box className={styles.cardIconContainer}>
            <Image
              className={styles.cardIcon}
              src="/icon-salad.svg"
              alt="salad icon"
            />
          </Box>
          <Box className={styles.cardContent}>
            <Box>
              <Title className={styles.cardTitle} order={4}>
                Crowd-driven open ingredient food supply
              </Title>
              <Text className={styles.cardDescription}>
              </Text>
            </Box>
            <Button classNames={{ root: styles.cardButton }} variant="unstyled" disabled>
              Learn More
            </Button>
          </Box>
        </Box>

        <Box className={styles.card}>
          <Box className={styles.cardIconContainer}>
            <Image
              className={styles.cardIcon}
              src="/icon-user.svg"
              alt="delivery icon"
            />
          </Box>
          <Box className={styles.cardContent}>
            <Box>
              <Title className={styles.cardTitle} order={4}>
                Unbiased first hand food as preventative care information
              </Title>
              <Text className={styles.cardDescription}>
              </Text>
            </Box>
            <Button classNames={{ root: styles.cardButton }} variant="unstyled" disabled>
              Learn More
            </Button>
          </Box>
        </Box>

        <Box className={styles.card}>
          <Box className={styles.cardIconContainer}>
            <Image
              className={styles.cardIcon}
              src="/icon-flask.svg"
              alt="star icon"
            />
          </Box>
          <Box className={styles.cardContent}>
            <Box>
              <Title className={styles.cardTitle} order={4}>
                Healthier packaged and prepared food options
              </Title>
              <Text className={styles.cardDescription}>
              </Text>
            </Box>
            <Button classNames={{ root: styles.cardButton }} variant="unstyled" disabled>
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Goals;
