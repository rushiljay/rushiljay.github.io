import { AboutMe } from "@/components/AboutMe";
import EducationView from "@/components/EducationView";
import { Hero } from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { SkillsCloud } from "@/components/SkillsCloud";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Mode Toggle */}
      <div className="absolute top-0 right-0 m-2">
        <ModeToggle />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center px-4 sm:px-6 lg:px-8" id="home">
        <div className="max-w-4xl w-full">
          <div>
          <Hero />
          </div>
          <div>
            {/* Responsive container for SkillsCloud */}
            <div className="mx-auto w-full max-w-lg">
              <SkillsCloud />
            </div>
          </div>
          <div>
            <AboutMe />
          </div>
          <div id="experiences">
            <Resume/>
          </div>
          <div className="mt-10" id="education">
            <EducationView/>
          </div>
          <div  id="projects">
            <Projects/>
          </div>
        </div>
      </div>
    </div>
  );
}
