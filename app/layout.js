import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/home1/Menubar/Menubar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agrimo: Cultivating the Future",
  description: "Empowering modern farming with innovative solutions and tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
      </body>
    </html>
  );
}
