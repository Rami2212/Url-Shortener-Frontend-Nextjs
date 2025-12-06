import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const metadata: Metadata = {
  title: "Simple URL Shortener",
  description: "A basic URL shortener built with Next.js and Go backend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
        <Header />
        <main className="flex-1 flex justify-center px-4 py-8">
          <div className="w-full max-w-2xl">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
