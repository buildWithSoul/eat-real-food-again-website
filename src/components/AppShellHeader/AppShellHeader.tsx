import React from "react";
import { Box, Burger, Button, Image } from "@mantine/core";
import styles from "./AppShellHeader.module.css";
import Link from "next/link";

interface AppShellHeaderProps {
  opened: boolean;
  toggle: () => void;
}

const AppShellHeader = ({ opened, toggle }: AppShellHeaderProps) => {
  return (
    <Box className={styles.appShellHeader}>
      <Box className={styles.spacer} />
      <Image
        className={styles.logo}
        alt="Eat Real Food Again"
        src={"/logo.svg"}
      />

      <Box className={styles.headerLinks}>
        <Link className={styles.headerLink} href="/about">
          The Movement
        </Link>
        <Link className={styles.headerLink} href="/about">
          Longetivity Legends Center
        </Link>
        <Link className={styles.headerLink} href="/about">
          Real Fine Dinning
        </Link>
      </Box>

      <Box className={styles.headerButtons}>
        <Button className={styles.headerButton}>Talk To Longetivity</Button>
        <Button className={styles.headerButton}>Sign In</Button>
      </Box>

      <Burger
        className={styles.burger}
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="md"
      />
    </Box>
  );
};

export default AppShellHeader;
