"use client";

import { Box, Button, Divider, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import styles from "../Auth/Auth.module.css";
import { supabase } from "../../utils/supabase/client";

const SignUp = () => {
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
    });
    if (error) {
      console.error("Error signing in with Facebook:", error.message);
    }
  };

  const handleTwitterSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitter",
    });
    if (error) {
      console.error("Error signing in with Twitter:", error.message);
    }
  };

  return (
    <Box className={styles.card}>
      <Image
        className={styles.cardImage}
        src="/image-auth.png"
        alt="Join The Movement"
      />

      <Box className={styles.cardBody}>
        <Title className={styles.cardTitle} order={3}>
          Lorem ipsum dolor sit amet
        </Title>
        <Text className={styles.cardSubtitle}>Lorem ipsum dolor sit amet</Text>

        <Box className={styles.buttonGroup}>
          <Button onClick={handleGoogleSignIn} className={styles.socialButton}>
            <Image alt="google" src={"/card-icon-google.svg"} />
          </Button>
          <Button
            onClick={handleFacebookSignIn}
            className={styles.socialButton}
          >
            <Image alt="facebook" src={"/card-icon-facebook.svg"} />
          </Button>
          <Button onClick={handleTwitterSignIn} className={styles.socialButton}>
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

export default SignUp;
