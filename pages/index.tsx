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
    <main className={`text-white flex justify-center items-center mt-[350px]`}>
      <SEOHead titleString='AI Marketplace-Atlan | Home' description='AI Marketplace is a big repository of 
      information about LLMs and AI models built by developers and organizations' />
      <div className='flex flex-col items-center gap-y-5 justify-center'>
        <h1 className="text-3xl text-center">
          Welcome to{' '} AI Marketplace
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/models">Let&apos;s get started</Link>
        </button>
      </div>
    </main>

  );
}
