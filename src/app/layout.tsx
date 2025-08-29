import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyLinks",
  description:
    "A curated collection of my personal links — including profiles, projects, and resources — all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
