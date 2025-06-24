import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import Header from "./components/Header";
import Providers from './Providers'; 
import Navbar from "./components/Navbar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMdb clone",
  description: "This is Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header />
       <Suspense fallback={<div>Loading navbar...</div>}>
            <Navbar />
       </Suspense>
        {children}
        </Providers>
       </body>
    </html>

  );
}
