import Header from "@/components/Header/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Commerce",
  description: "This is a mini commerce which uses Next JS 13.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-full px-10 mt-10">
          <div className="max-w-screen-2xl mx-auto flex gap-12">
            <Sidebar />
            <section className="w-9/12">{children}</section>
          </div>
        </main>
      </body>
    </html>
  );
}
