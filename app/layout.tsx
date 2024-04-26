import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/provider";
import { amiri } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Blog Cms",
  description: "Generated by Biramahire Dan Bellamy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amiri.className} bg-amber-50 text-black dark:text-amber-50 dark:bg-slate-900`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
