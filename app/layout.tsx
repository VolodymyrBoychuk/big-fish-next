// app/layout.tsx
import "./globals.css";
import NavBar from "./components/NavBar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import AnimatedLayout from "./components/AnimatedLayout";

const publicSans = localFont({
  src: [
    {
      path: "../public/fonts/PublicSans-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/PublicSans-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-publicsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vionum",
  description: "Vionum company website",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} font-publicsans`}>
        <NavBar />
        <AnimatedLayout>
          <main className="pt-[0px]">{children}</main>
        </AnimatedLayout>
      </body>
    </html>
  );
}
