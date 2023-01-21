import { Container } from "../Elements";
import { motion } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <>
      <Container
        styles="min-h-screen h-screen mt-5 w-full flex flex-col items-center justify-center"
        id="projects"
      >
        <motion.div
          ref={ref}
          className="h-1/2 w-full flex flex-col items-center justify-center"
          animate={animation}
        >
          <motion.div className="w-1/4">
            <p className="text-6xl font-extrabold">Projects.</p>
          </motion.div>
          <motion.div className="w-1/4">
            <p className="text-lg mt-2">
              During bootcamp, I collaborated with many people from different
              background, and knowledge, we worked as a team and built many
              projects, these are the projects that me and my teammates did
              during bootcamp and also my personal projects:
            </p>
            <p className="text-xl mt-2 font-bold flex">
              shopree{" "}
              <a href="https://github.com/hendrywilliam/shopree">
                <BiLinkExternal size={20} className={"ml-2 mt-1.5"} />
              </a>
            </p>
            <p className="text-lg mt-2">
              shopree (Shopping Spree) is a fake ecommerce where you can buy or
              sell your goods. I'm still working on this one, hehe.
            </p>
            <p className="text-xl mt-2 font-bold flex">
              Rawat Inap{" "}
              <a href="https://github.com/KamarRS-App/FrontEnd">
                <BiLinkExternal size={20} className={"ml-2 mt-1.5"} />
              </a>
            </p>
            <p className="text-lg mt-2">
              Rawat Inap is a website where you can make an appointment with a
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
              Airbnb Clone is a second group project where frontend and backend
              collaborated, this project is not finished due to low manpower but
              still we managed to serve some features such as list for stays,
              book the property or rent your own property.
            </p>
            <p className="mt-2">And many more...</p>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
};
