"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase/client";
import { Box, Button, Text, Title, Notification } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import styles from "./page.module.css";

const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
        if (success) {
          router.push("/");
        }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error, success, router]);

  const handlePasswordReset = async () => {
    setError("");
    setSuccess("");

    if (!password || !confirmPassword) {
      setError("Please fill out both fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setError("There was an error updating your password.");
    } else {
      setSuccess("Password updated successfully!");
    }
  };

  return (
    <Box className={styles.card}>
      <Box className={styles.cardBody}>
        <Title className={styles.cardTitle} order={3}>
          Reset Your Password
        </Title>
        <Text className={styles.cardSubtitle}>
          Enter and confirm your new password.
        </Text>

        <form>
          <Text
            className={styles.inputLabel}
            component="label"
            htmlFor="password"
          >
            New Password
          </Text>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Text
            className={styles.inputLabel}
            component="label"
            htmlFor="confirmPassword"
          >
            Confirm New Password
          </Text>
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            className={styles.cardButton}
            loading={loading}
            onClick={handlePasswordReset}
          >
            Reset Password
          </Button>

          {error && (
            <Notification
              icon={<IconX size={18} />}
              color="red"
              title="Bummer!"
            >
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
        </form>
      </Box>
    </Box>
  );
};

export default ResetPassword;
