import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import LeftNavBar from "./components/leftnavbar";
import Header from "./components/header";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LeftNavBar />
        <div className="rightsection">
          <Header />
            {children}
          </div>
      </body>
    </html>
  );
}
