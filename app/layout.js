import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "GidaConnect",
  description:
    "An app for Listing of property and connecting Tenants directly to lanndlord",
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon-16x16.png",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased h-[100vh] w-[100vw] bg-white`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
