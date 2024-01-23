"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "./ui/header";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Footer from "./ui/footer";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const inter = Inter({ subsets: ["latin"] });

const metadata: any = {
  title: "Ticket Booking",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let persistor = persistStore(store);
  return (
    <html lang="en">
       <Head>
        {metadata.title && <title>{metadata.title}</title>}
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Header />
            {children}
            <Footer />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
