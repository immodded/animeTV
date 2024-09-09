import localFont from "next/font/local";
import "./globals.css";
import siteConfig from "./site.config";
import { NavLinks } from '@/app/ui/nav-links'
import Footer from "./ui/footer";

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
      
      <Footer />
      </body>
    </html>
  );
}
