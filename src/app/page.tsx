import { About } from "@/components/about/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/hero/Hero";
import { ThemeBtn } from "@/components/ThemeBtn";

const Home = () => (
  <div className="page">
    <ThemeBtn />
    <main>
      <Hero />
      <About />
    </main>
    <Footer />
  </div>
);

export default Home;
