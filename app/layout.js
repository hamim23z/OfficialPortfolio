import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Hamim Choudhury | Portfolio",
  description: "Hamim Choudhury Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="__variable_835dce" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}