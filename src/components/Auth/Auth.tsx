"use client";

import { Box, Button, Divider, Image, Text, Title } from "@mantine/core";
import Link from "next/link";
import styles from "../Auth/Auth.module.css";
import { supabase } from "../../utils/supabase/client";
import SignUp from "./SignUp";
import { useState } from "react";

type AUTH_VIEW = 'signup' | 'login' | 'forgot_password'

const Auth = () => {
  const [selectedView, setSelectedView] = useState<AUTH_VIEW>('signup')

  const chosenView = () => {
    if (selectedView === "signup") return <SignUp />

    if (selectedView === 'login') return <SignUp />

    if (selectedView === 'forgot_password') return <SignUp />

    return <SignUp />
  }

  return (
    {chosenView}
  );
};

export default Auth;
