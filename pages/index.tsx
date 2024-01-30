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
    <main className={`text-white flex justify-center items-center ${poppins.className}`}>
      <SEOHead titleString='AI Marketplace-Atlan | Home' description='AI Marketplace is a big repository of 
      information about LLMs and AI models built by developers and organizations' />

      <h1 className="text-3xl">
        Welcome to{' '}
        <Link className="text-blue-600" href="/models">
          AI Marketplace
        </Link>
      </h1>
    </main>

  );
}
