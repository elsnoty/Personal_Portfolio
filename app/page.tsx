
import About from "@/Components/About/About";
import Nav from "@/Components/NavBAr/Nav";
import Projects from "@/Components/Projects/projects";
import { SparklesPreview } from "@/Components/Hero/sparkles";
import CustomCursor from "@/util/MouseCursor";
import ContactPage from "@/Components/Contact/Contact";
import BurgerMenu from "@/Components/NavBAr/BurgerMenu";
import Contact from "@/Components/Contact/Contact";
import NavLinks from "@/Components/NavBAr/NavLinks";


export default function Home() {
  return (
    <div className="">
      <CustomCursor />
      <Nav/>
      <SparklesPreview />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
