"use client";

import { Box, Image } from "@mantine/core";
import SignUp from "./SignUp";
import { useState } from "react";

import styles from "../Auth/Auth.module.css";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";

type AUTH_VIEW = "signup" | "signin" | "forgot_password";

const Auth = () => {
  const [selectedView, setSelectedView] = useState<AUTH_VIEW>("signup");

  const chosenView = () => {
    if (selectedView === "signup")
      return <SignUp setSelectedView={setSelectedView} />;

    if (selectedView === "signin")
      return <SignIn setSelectedView={setSelectedView} />;

    if (selectedView === "forgot_password")
      return <ForgotPassword setSelectedView={setSelectedView} />;

    return <SignUp setSelectedView={setSelectedView} />;
  };

  return (
    <Box className={styles.card}>
      <Image
        className={styles.cardImage}
        src="/image-auth.png"
        alt="Join The Movement"
      />
      {chosenView()}
    </Box>
  );
};

export default Auth;
