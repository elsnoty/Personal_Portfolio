import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/util/SmoothSroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mostafa Shawky",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
        {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
