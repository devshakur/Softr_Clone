import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "First Next.js Site",
  description: "Testing My Knowledge of Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased h-[100vh]  w-[100vw] bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
