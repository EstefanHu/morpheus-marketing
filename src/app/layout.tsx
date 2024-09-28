import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morpheus",
  description: "Project Tracking Site Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-screen flex justify-between items-center px-3 h-14">
          <Link href="/">
            <h1 className="font-bold text-2xl">:M<span className="hidden sm:inline-block">orpheus</span></h1>
          </Link>
          <span>
            <Link href="/register" className='font-bold px-6 py-[7px] mr-3 border-2 rounded border-primaryColor'>register</Link>
            <Link href="/login" className="font-bold px-6 py-[7px] border-2 rounded border-primaryColor bg-primaryColor text-background">login</Link>
          </span>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Link href='/' className="">
            <span className="">prjkt</span>
            :morpheus
          </Link>
        </footer>
      </body>
    </html>
  );
}
