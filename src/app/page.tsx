import { Hero } from "@/components/Hero/Hero";
import { ThemeBtn } from "@/components/ThemeBtn";

const Home = () => (
  <div className="page">
    <ThemeBtn />
    <main>
      <Hero />
    </main>
  </div>
);

export default Home;
