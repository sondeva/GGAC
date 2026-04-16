import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Areas />
      <Education />
      <Experience />
      <Publications />
      <Projects />
      <Awards />
      <Courses />
      <Contact />
    </main>
  );
}
