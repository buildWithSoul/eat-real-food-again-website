import { Box, Image, Text, Title } from "@mantine/core";
import React from "react";
import styles from "./MissionStatement.module.css";

const MissionStatement = () => {
  return (
    <Box className={styles.missionStatement}>
      <Box className={styles.textContainer}>
        <Text className={styles.sectionSubtitle}>
          Health and Longevity for All
        </Text>
        <Title className={styles.sectionTitle} order={2}>
          Our Mission
        </Title>
        <Text className={styles.sectionDescription}>
          We are a movement facilitating consumers and producers to regain control of the food industry and shifting the KPIs to include consumer health and fair trade.
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
            <Title className={styles.cardTitle} order={4}>
              Real Ingredients
            </Title>
            <Text className={styles.cardDescription}>
                
            </Text>
          </Box>
        </Box>

        <Box className={styles.card}>
          <Box className={styles.cardIconContainer}>
            <Image
              className={styles.cardIcon}
              src="/icon-coins.svg"
              alt="delivery icon"
            />
          </Box>
          <Box className={styles.cardContent}>
            <Title className={styles.cardTitle} order={4}>
              Reliable Information
            </Title>
            <Text className={styles.cardDescription}>
            </Text>
          </Box>
        </Box>

        <Box className={styles.card}>
          <Box className={styles.cardIconContainer}>
            <Image
              className={styles.cardIcon}
              src="/icon-leaf.svg"
              alt="star icon"
            />
          </Box>
          <Box className={styles.cardContent}>
            <Title className={styles.cardTitle} order={4}>
              Respected Farmers
            </Title>
            <Text className={styles.cardDescription}>
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionStatement;
