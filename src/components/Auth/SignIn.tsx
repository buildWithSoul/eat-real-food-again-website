"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Divider,
  Image,
  Text,
  Title,
  Notification,
} from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import styles from "../Auth/Auth.module.css";
import { supabase } from "../../utils/supabase/client";
import { validateEmail, validatePassword } from "../../utils/validation";
import { Provider } from "@supabase/supabase-js";

type SignInProps = {
  setSelectedView: (view: "signup" | "signin" | "forgot_password") => void;
};

const SignIn = ({ setSelectedView }: SignInProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleOAuthSignIn = async (provider: Provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      console.error(`Error signing in with ${provider}:`, error.message);
      setError(`Error signing in with ${provider}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and include at least one letter and one number."
      );
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      setError("Failed to sign up. Please try again.");
    } else {
      setSuccess(
        "Sign-up successful! Please check your email to confirm your account."
      );
    }
  };

  return (
    <Box className={styles.cardBody}>
      <Title className={styles.cardTitle} order={3}>
        Sign In Today
      </Title>
      <Text className={styles.cardSubtitle}>Yeah</Text>

      <Box className={styles.buttonGroup}>
        <Button
          onClick={() => handleOAuthSignIn("google")}
          className={styles.socialButton}
          loading={loading}
        >
          <Image alt="google" src={"/card-icon-google.svg"} />
        </Button>
        <Button
          onClick={() => handleOAuthSignIn("facebook")}
          className={styles.socialButton}
          loading={loading}
        >
          <Image alt="facebook" src={"/card-icon-facebook.svg"} />
        </Button>
        <Button
          onClick={() => handleOAuthSignIn("twitter")}
          className={styles.socialButton}
          loading={loading}
        >
          <Image alt="x" src={"/card-icon-x.svg"} />
        </Button>
      </Box>

      <Divider className={styles.cardDivider} />

      <form onSubmit={handleSubmit}>
        <Text className={styles.inputLabel} component="label" htmlFor="email">
          Email Address
        </Text>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className={styles.cardButton} loading={loading}>
          Sign In
        </Button>
      </form>

      {error && (
        <Notification
          icon={<IconX size={18} />}
          color="red"
          title="Bummer!"
          mb="xl"
        >
          {error}
        </Notification>
      )}

      {success && (
        <Notification
          icon={<IconCheck size={18} />}
          color="teal"
          title="All good!"
          mb="xl"
        >
          {success}
        </Notification>
      )}
      <Text
        className={styles.authLink}
        onClick={() => setSelectedView("forgot_password")}
      >
        Forgot your Password?
      </Text>
      <Text
        className={styles.authLink}
        onClick={() => setSelectedView("signup")}
      >
        Dont have an account? Sign up
      </Text>
    </Box>
  );
};

export default SignIn;
