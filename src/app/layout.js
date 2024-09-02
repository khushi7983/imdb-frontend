import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Providers from './Providers'; 


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
        </Providers>
        {children}</body>
    </html>

  );
}
