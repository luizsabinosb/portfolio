import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Home";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience"; 
import Footer from "@/components/Footer";
import Head from "next/head";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    
    <div className={`${geistSans.className} ${geistMono.className} bg-[#0a0a0a] text-white scroll-smooth`}>
      <Head>
        <title>Luiz Sabino</title>
        <meta name="description" content="Portfólio pessoal de Luiz Sabino" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
