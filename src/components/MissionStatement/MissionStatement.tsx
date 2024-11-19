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
          We are a movement of Americans improving their quality of life through
          making better investments in the food they consume.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus, lacus eget iaculis molestie, erat quam pharetra tellus
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus, lacus eget iaculis molestie, erat quam pharetra tellus
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              maximus, lacus eget iaculis molestie, erat quam pharetra tellus
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MissionStatement;
