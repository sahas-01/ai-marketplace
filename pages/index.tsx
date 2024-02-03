import ModelCard from "@/components/ModelCard";
import Navbar from "@/components/Navbar";
import SEOHead from "@/utils/SEOHead";
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
    <main className={`text-white flex justify-center items-center relative`}>
      <SEOHead titleString='AI Marketplace-Atlan | Home' description='AI Marketplace is a big repository of 
      information about LLMs and AI models built by developers and organizations' />
      <div className="absolute top-[50%] left-[50%]">
        <h1 className="text-3xl">
          Welcome to{' '} AI Marketplace
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/models">Let&apos;s get started</Link>
        </button>
      </div>
    </main>

  );
}
