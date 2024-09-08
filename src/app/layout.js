import localFont from "next/font/local";
import "./globals.css";
import siteConfig from "./site.config";
import { NavLinks } from '@/app/ui/nav-links'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 text-white py-4">
        <NavLinks /> 
        </header>
        {children}
      
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2024 {siteConfig.name}
      </footer>
      </body>
    </html>
  );
}
