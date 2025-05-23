import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import "./globals.css";

const akshar = Akshar({
  variable: "--font-akshar",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xpace Lab",
  description: "Texto a entrar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${akshar.variable} antialiased`}>{children}</body>
    </html>
  );
}
