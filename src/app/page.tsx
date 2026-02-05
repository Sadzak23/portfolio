import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/hero/Hero";
import { About } from "@/sections/about/About";
import { ThemeBtn } from "@/components/ThemeBtn";
import { Projects } from "@/sections/projects/Projects";
import { Contact } from "@/sections/contact/Contact";

const Home = () => (
  <div className="page">
    <ThemeBtn />
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
