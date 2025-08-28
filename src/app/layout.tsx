import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Linktree",
  description: "Linktree buatan saya sendiri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
