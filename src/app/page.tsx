import { About } from "@/components/about/About";
import { Hero } from "@/components/hero/Hero";
import { ThemeBtn } from "@/components/ThemeBtn";

const Home = () => (
  <div className="page">
    <ThemeBtn />
    <main>
      <Hero />
      <About />
    </main>
  </div>
);

export default Home;
