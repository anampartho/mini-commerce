import Header from "@/components/Header/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";
import ReactQueryProvider from "@/react-query/provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "Mini Commerce",
  description: "This is a mini commerce which uses Next JS 13.",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-green-50`}>
        <ReduxProvider>
          <Header />
          <main className="max-w-full px-10 mt-10">
            <div className="max-w-screen-2xl mx-auto flex gap-12">
              <section className="w-full">
                <ReactQueryProvider>{children}</ReactQueryProvider>
              </section>
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  );
}
