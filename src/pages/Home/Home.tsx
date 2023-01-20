import { Navbar } from "~/components";
import { MainLayout } from "~/components";
import { LandingSection } from "./components";
import { About } from "./components";
import { Projects } from "./components";

export const Home = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <LandingSection />
        <About />
        <Projects />
      </MainLayout>
    </>
  );
};
