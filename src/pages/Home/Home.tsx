import { Navbar } from "~/components";
import { MainLayout } from "~/components";

export const Home = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <div className="h-screen w-full">
          <p>Iloveyou</p>
        </div>
        <div className="h-screen w-full">
          <p>Iloveyou</p>
        </div>
        <div className="h-screen w-full">
          <p>Iloveyou</p>
        </div>
        <div className="h-screen w-full">
          <p>Iloveyou</p>
        </div>
      </MainLayout>
    </>
  );
};
