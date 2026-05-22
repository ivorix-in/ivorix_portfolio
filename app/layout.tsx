import "./globals.css";
import { satoshi, inter } from "@/lib/fonts";
import { cn } from "@/lib/cn";

export const metadata = {
  title: "Ivorix | Smart AI Agents & Workflow Automation",
  description:
    "Automate your daily workflows with intelligent, autonomous AI agents designed to improve efficiency and boost productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(satoshi.variable, inter.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
