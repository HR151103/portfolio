import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact, { Footer } from "@/components/Contact";

export default function Home() {
    return (
        <main className="bg-gray-950 min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
