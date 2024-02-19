import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import appTheme from "./app.theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS and MUI Starter",
  description: "NextJS and MUI Starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
