import ModelCard from "@/components/ModelCard";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const poppins = Poppins({
  adjustFontFallback: false,
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
});

export default function Home() {
  return (
    <main className={`text-white flex justify-center items-center ${poppins.className}`}>
      <Head>
        <title>AI Marketplace-Atlan</title>
        <meta
          name="description"
          content="Next.js + Tailwind CSS + TypeScript + ESLint + Prettier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl">
        Welcome to{' '}
        <Link className="text-blue-600" href="/models">
          AI Marketplace
        </Link>
      </h1>
    </main>

  );
}
