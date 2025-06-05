import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Before I Die - Bucket List",
  keywords: [
    "bucket list",
    "before I die",
    "life goals",
    "achievements",
    "dreams",
    "adventure",
    "travel",
    "experiences",
  ],
  description:
    "Create and share your bucket list of things to do before you die. Track your life goals, adventures, and dreams with our easy-to-use platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-radial-[at_25%_10%] from-[#163b22] via-[#0f0f0f] to-[#07071b]  ">
          {children}
        </div>
      </body>
    </html>
  );
}
