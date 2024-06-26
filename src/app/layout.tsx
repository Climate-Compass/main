import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider initialState={initialState}>
          <Header />
          <main className="flex flex-col items-center mt-[72px] flex-1">
            <div className="flex px-4 sm:px-6 md:px-8 lg:px-0 flex-col w-full container pt-4">
              {children}
            </div>
          </main>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
