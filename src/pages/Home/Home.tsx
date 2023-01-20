import { Navbar } from "~/components";
import { MainLayout } from "~/components";
import { Container } from "./components";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { BsMouse } from "react-icons/bs";

export const Home = () => {
  return (
    <>
      <MainLayout>
        <Navbar />
        <Container styles="min-h-screen h-screen mt-16 px-64 pt-64 text-center">
          <motion.h2
            className="text-9xl font-extrabold tracking-tighter"
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Hendri
          </motion.h2>
          <motion.h2
            className="text-9xl font-extrabold tracking-tighter"
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            William
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            A frontend engineer
          </motion.p>
          <div className="mt-64 flex flex-col justify-center text-center items-center">
            <p className="mb-2">Scroll down to explore my work</p>
            <BsMouse size={30} />
          </div>
        </Container>
        <Container
          styles="min-h-screen h-screen w-full flex flex-col items-center justify-center"
          id="about"
        >
          <div className="h-1/2 w-full flex flex-col items-center justify-center">
            <div className="w-1/4">
              <p className="text-6xl font-extrabold">About</p>
              <p className="text-lg mt-2">
                Hello there, my name is Hendri William, I am a frontend engineer
                based in Indonesia. I love to create things like websites,
                applications, or anything! I wrote my first "hello mom" in VB6
                when i was in junior highschool. My goal is to always build a
                good quality products.
              </p>
              <p className="text-lg mt-2">
                Here are a few technologies I've been working with recently:{" "}
                <span className="font-medium">
                  HTML5, CSS3, Javascript (ES6+), React.js, Next.js, Typescript,
                  Framer Motion, Node.js, Zustand, Redux, Tailwind CSS,
                  Bootstrap, Chakra UI
                </span>
              </p>
            </div>
          </div>
        </Container>
        <Container
          styles="min-h-screen h-screen mt-5 w-full flex flex-col items-center justify-center"
          id="about"
        >
          <div className="h-1/2 w-full flex flex-col items-center justify-center">
            <div className="w-1/4">
              <p className="text-6xl font-extrabold">Projects</p>
              <p className="text-lg mt-2">
                During bootcamp, I collaborated with many people from different
                background, and knowledge, we worked as a team and built many
                projects, these are the projects that me and my teammates did
                during bootcamp:
              </p>
              <p className="text-xl mt-2 font-bold flex">
                shopree{" "}
                <a href="https://github.com/hendrywilliam/shopree">
                  <BiLinkExternal size={20} className={"ml-2 mt-1.5"} />
                </a>
              </p>
              <p className="text-lg mt-2">
                shopree (Shopping Spree) is a fake ecommerce where you can buy
                or sell your goods. I'm still working on this one, hehe.
              </p>
              <p className="text-xl mt-2 font-bold flex">
                Rawat Inap{" "}
                <a href="https://github.com/KamarRS-App/FrontEnd">
                  <BiLinkExternal size={20} className={"ml-2 mt-1.5"} />
                </a>
              </p>
              <p className="text-lg mt-2">
                Rawat Inap is website where you can make an appointment with a
                doctor, check bed availability, book a room in hospital without
                leaving your comfy bed.
              </p>
              <p className="text-xl mt-2 font-bold flex">
                AirBnb Clone{" "}
                <a href="https://github.com/Group-Project-3-Kelompok-5/PROJECT-FE/tree/main/my-airbnb">
                  <BiLinkExternal size={20} className={"ml-2 mt-1.5"} />
                </a>
              </p>
              <p className="text-lg mt-2">
                Airbnb Clone is a second group project where frontend and
                backend collaborated, this project is not finished due to low
                manpower but still we managed to serve some features such as
                list for stays, book the property or rent your own property.
              </p>
              <p className="mt-2">And many more...</p>
            </div>
          </div>
        </Container>
      </MainLayout>
    </>
  );
};
