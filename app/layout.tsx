import { ToastContainer } from "react-toastify";
import { fontGlobal } from "@/utils/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Imase",
  description: "Sirviendo desde los años 80",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontGlobal.className}  antialiased`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
