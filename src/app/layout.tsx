import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReduxProvider } from "@/redux/provider";
import ReactQueryProvider from "@/react-query/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

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
      <body className={`${poppins.className} bg-green-50 text-green-950`}>
        <ReduxProvider>
          <Header />
          <main className="max-w-full px-10 mt-10">
            <div className="max-w-screen-2xl mx-auto flex gap-12">
              <Sidebar />
              <section className="w-full md:w-9/12">
                <ReactQueryProvider>{children}</ReactQueryProvider>
              </section>
            </div>
          </main>
        </ReduxProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
