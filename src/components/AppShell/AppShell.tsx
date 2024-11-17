"use client";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AppShellHeader from "../AppShellHeader/AppShellHeader";

interface AppShellComponentProps {
  children: React.ReactNode;
}

const AppShellComponent = ({ children }: AppShellComponentProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 112 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: true },
      }}
      withBorder={false}
      padding="md"
    >
      <AppShell.Header>
        <AppShell.Header>
          <AppShellHeader opened={opened} toggle={toggle} />
        </AppShell.Header>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default AppShellComponent;
