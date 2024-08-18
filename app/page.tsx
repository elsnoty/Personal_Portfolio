
import About from "@/Components/About/About";
import Nav from "@/Components/NavBAr/Nav";
import Projects from "@/Components/Projects/projects";
import { SparklesPreview } from "@/Components/Hero/sparkles";
import CustomCursor from "@/util/MouseCursor";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";
import { TracingBeam } from "@/util/TracingBeams";


export default function Home() {
  return (
    <div className="">
      <TracingBeam>
      <CustomCursor />
      <Nav/>
      <SparklesPreview />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </TracingBeam>
    </div>
  );
}
