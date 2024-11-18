import { Box, Button, Image, Text, Title } from "@mantine/core";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.leftHero}>
        <Box>
          <Text className={styles.heroSubText}>Lorem Ipsum Dolor</Text>
          <Title className={styles.heroTitle} order={1}>
            Lorem Ipsum Dolor Sit Amet Consectetur
          </Title>
        </Box>

        <Text className={styles.heroBodyText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus,
          lacus eget iaculis.
        </Text>

        <Box className={styles.leftHeroBottom}>
          <Button classNames={{ root: styles.heroButton }} variant="unstyled">
            Contact Us
          </Button>
        </Box>
      </Box>

      <Box className={styles.rightHero}>
        <Box className={styles.heroImageContainer}>
          <Image
            className={styles.dashedCircle}
            src="dashed-circle.svg"
            alt="dashed circle"
          />
          <Image
            className={styles.heroImage}
            src="/hero.jpeg"
            alt="Hero Image"
          />
          <Image
            className={styles.blobDesign}
            src="/blob-design.svg"
            alt="blob design"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
