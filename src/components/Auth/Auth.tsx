"use client";

import { Box, Button, Divider, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import styles from "../Auth/Auth.module.css";

const Auth = () => {
  return (
    <Box className={styles.card}>
      <Image
        className={styles.cardImage}
        src="https://s3-alpha-sig.figma.com/img/d5d8/0667/b922df06ea05d359b8fb267006e47a0b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ne4bSsiXcikavj3eSw-wjOxaf0--VzNAiJ7TiXDT20IcxS5RGtC24g7tdnDs3YI3O7wCbJWVISyT9Wln~mjxIBXe-VEUxp2mZEPM3OwFN2lKnu-kESzwoK1giGNGmKAkRWaidW4o70wWQFDuAVtF-kwQEZz87NNFEXDrm2PmMixlT1h~wEsEjFL7BdmRUn7uLEWfRI1S~Yz7hL9mldKNuBdF-2WHjOt1B-VGkJ-6umUrT16yOrd~TDd7G03tLAsVfIcIBX7WEh2ugHB~JZxJV6lqnLHqDLnQ4YD1QzbLnI8UyMWuseA8c7ED1qf9mTLnnaSh8vSXRFHILnzFU55fOw__"
        alt="Join The Movement"
      />

      <Box className={styles.cardBody}>
        <Title className={styles.cardTitle} order={3}>
          Lorem ipsum dolor sit amet
        </Title>
        <Text className={styles.cardSubtitle}>Lorem ipsum dolor sit amet</Text>

        <Box className={styles.buttonGroup}>
          <Button className={styles.socialButton}>
            <Image alt="google" src={"/card-icon-google.svg"} />
          </Button>
          <Button className={styles.socialButton}>
            <Image alt="facebook" src={"/card-icon-facebook.svg"} />
          </Button>
          <Button className={styles.socialButton}>
            <Image alt="x" src={"/card-icon-x.svg"} />
          </Button>
        </Box>

        <Divider className={styles.cardDivider} />

        <form>
          <Text className={styles.inputLabel} component="label" htmlFor="email">
            Email Address
          </Text>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
          />

          <Text
            className={styles.inputLabel}
            component="label"
            htmlFor="password"
          >
            Password
          </Text>
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
          />

          <Button className={styles.cardButton}>Sign in</Button>
        </form>

        <Link className={styles.authLink} href="#">
          Forgot your Password?
        </Link>
        <Link className={styles.authLink} href="#">
          Dont have an account? Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default Auth;
