import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  adjustFontFallback: false,
  display: 'swap',
  style: ['italic', 'normal'],
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
