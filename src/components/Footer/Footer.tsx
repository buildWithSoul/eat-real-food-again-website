import { Box, Divider, Image, Text, Title } from "@mantine/core";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.footerTop}>
        <Image
          className={styles.footerLogo}
          alt="Eat Real Food Again"
          src={"/footer-logo.svg"}
        />

        <Box className={styles.linksContainer}>
          <Title order={4} className={styles.linksTitle}>
            Menu
          </Title>
          <Box className={styles.links}>
            <Link className={styles.link} href="#">
              About
            </Link>
            <Link className={styles.link} href="#">
              Service
            </Link>
            <Link className={styles.link} href="#">
              Location
            </Link>
            <Link className={styles.link} href="#">
              Contact
            </Link>
          </Box>
        </Box>

        <Box className={styles.linksContainer}>
          <Title order={4} className={styles.linksTitle}>
            Service
          </Title>
          <Box className={styles.links}>
            <Link className={styles.link} href="#">
              Mission Statement
            </Link>
            <Link className={styles.link} href="#">
              State of Food
            </Link>
            <Link className={styles.link} href="#">
              Real Food Guide
            </Link>
            <Link className={styles.link} href="#">
              Wellness Expert
            </Link>
          </Box>
        </Box>

        <Box className={styles.socialLinksContainer}>
          <Title order={4} className={styles.linksTitle}>
            Social
          </Title>
          <Box className={styles.socialLinks}>
            <Link className={styles.socialLink} href={"#"}>
              <Image
                className={styles.icon}
                alt="Facebook"
                src={"/icon-facebook.svg"}
              />
            </Link>
            <Link className={styles.socialLink} href={"#"}>
              <Image
                className={styles.icon}
                alt="Twitter"
                src={"/icon-twitter.svg"}
              />
            </Link>
            <Link className={styles.socialLink} href={"#"}>
              <Image
                className={styles.icon}
                alt="Instagram"
                src={"/icon-instagram.svg"}
              />
            </Link>
          </Box>
        </Box>
      </Box>

      <Divider className={styles.divider} />

      <Box className={styles.footerBottom}>
        <Box className={styles.copyrightContainer}>
          <Text className={styles.copyrightText}>Copyright © 2024</Text>
          <Text className={styles.copyrightText}>All Rights Reserved</Text>
        </Box>
        <Box className={styles.legalLinks}>
          <Link className={styles.legalLink} href="#">
            Terms of Service
          </Link>
          <Link className={styles.legalLink} href="#">
            Privacy Policy
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
