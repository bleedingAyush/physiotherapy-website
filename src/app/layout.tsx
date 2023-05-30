import Head from "next/head";
import Layout from "./components/Layout";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Mahaveer Suman | Physiotherapist",
  description: "Dr. Mahaveer Suman: Expert Physiotherapist in Kota",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
