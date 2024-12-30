"use client";

import { useState, useEffect } from "react";
import { Box, Button, Text, Title, Notification } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import styles from "../Auth/Auth.module.css";
import { supabase } from "../../utils/supabase/client";
import { validateEmail } from "../../utils/validation";

type ForgotPasswordProps = {
  setSelectedView: (view: "signup" | "signin" | "forgot_password") => void;
};

const ForgotPassword = ({ setSelectedView }: ForgotPasswordProps) => {
  const [email, setEmail] = useState<string>("");
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

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);

    if (error) {
      setError("Failed to send reset password email. Please try again.");
    } else {
      setSuccess("Reset password email sent! Check your inbox.");
    }
  };

  return (
    <Box className={styles.cardBody}>
      <Title className={styles.cardTitle} order={3}>
        Reset Your Password
      </Title>
      <Text className={styles.cardSubtitle}>
        Enter your email address to reset your password.
      </Text>

      <form onSubmit={handleResetPassword}>
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

        <Button type="submit" className={styles.cardButton} loading={loading}>
          Send Reset Email
        </Button>
      </form>

      {error && (
        <Notification icon={<IconX size={18} />} color="red" title="Bummer!">
          {error}
        </Notification>
      )}

      {success && (
        <Notification
          icon={<IconCheck size={18} />}
          color="teal"
          title="All good!"
        >
          {success}
        </Notification>
      )}

      <Text
        className={styles.authLink}
        role="button"
        tabIndex={0}
        onClick={() => setSelectedView("signin")}
      >
        Back to Sign In
      </Text>
    </Box>
  );
};

export default ForgotPassword;
