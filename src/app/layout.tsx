import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Badmintoons",
  description: "Fun badminton for everyone!",
  icons: {
    icon: "/images/badmintoons-logo.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="antialiased font-sans">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
