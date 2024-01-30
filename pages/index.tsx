import ModelCard from "@/components/ModelCard";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  adjustFontFallback: false,
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
      <Head>
        <title>AI Marketplace-Atlan</title>
        <meta
          name="description"
          content="Next.js + Tailwind CSS + TypeScript + ESLint + Prettier"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10">
        <ModelCard />
        <ModelCard />
        <ModelCard />
        <ModelCard />
        <ModelCard />
        <ModelCard />
      </div>
    </main>

  );
}
