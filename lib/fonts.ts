import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const satoshi = localFont({
  src: "../app/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "300 900",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
