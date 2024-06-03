import { Caveat as Inter } from "next/font/google";
import Header from "@/components/layout/headers";
import "./globals.css";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata = {
  title: "Polyvalent | Learn words",
  description: "Polyvalent app , learn and revise your favorite words",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " flex flex-col px-12 md:px-16 lg:px-24 items-center"
        }>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
