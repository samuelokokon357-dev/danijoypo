import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DANIJOY | Pocket Money Portal",
  description: "A secure school pocket money and withdrawal management portal for Danijoy International Schools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
