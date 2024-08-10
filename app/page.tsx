
import About from "@/Components/About/About";
import Nav from "@/Components/NavBAr/Nav";
import Projects from "@/Components/Projects/projects";
import { SparklesPreview } from "@/Components/Hero/sparkles";
import { TracingBeam } from "@/Components/TracingBeams";
import CustomCursor from "@/util/MouseCursor";
import ContactPage from "@/Components/Contact/Contact";
import BurgerMenu from "@/Components/NavBAr/BurgerMenu";


export default function Home() {
  return (
    <div className="">
      <TracingBeam>
      <CustomCursor />
      <Nav/>
      <SparklesPreview />
      <About />
      <Projects />
      <BurgerMenu />
      </TracingBeam>
    </div>
  );
}
