import { Container } from "../Elements";
import { motion } from "framer-motion";
import { BsMouse } from "react-icons/bs";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const LandingSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
        },
      });
      animation3.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
        },
      });
    }

    if (!inView) {
      animation.start({ opacity: 0 });
      animation2.start({ opacity: 0 });
      animation3.start({ opacity: 0, y: 50 });
    }
  }, [inView]);

  return (
    <>
      <Container
        styles="w-full h-max xl:h-screen mt-16 xl:px-64 pt-32 xl:pt-64 text-center"
        id={"landing-section"}
      >
        <div ref={ref} className="h-full">
          <motion.h2
            className="text-7xl lg:text-9xl font-extrabold tracking-tighter"
            animate={animation}
          >
            HENDRI WILLIAM.
          </motion.h2>
          <motion.p className="text-md lg:text-base" animate={animation3}>
            A frontend engineer.
          </motion.p>
          <div className="mt-48 xl:mt-64 flex flex-col justify-center text-center items-center">
            <p className="mb-2 text-sm xl:text-base">
              Scroll down to explore my space.
            </p>
            <BsMouse size={20} />
          </div>
        </div>
      </Container>
    </>
  );
};
