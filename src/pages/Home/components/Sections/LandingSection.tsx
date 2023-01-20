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
    console.log("Element is in view: ", inView);
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 2,
        },
      });
      animation2.start({
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
      animation.start({ opacity: 0, x: 150 });
      animation2.start({ opacity: 0, x: -150 });
      animation3.start({ opacity: 0, y: 50 });
    }
  }, [inView]);

  return (
    <>
      <Container
        styles="min-h-screen h-screen mt-16 px-64 pt-64 text-center"
        id={"landing-section"}
      >
        <div ref={ref}>
          <motion.h2
            className="text-9xl font-extrabold tracking-tighter"
            animate={animation}
          >
            Hendri
          </motion.h2>
          <motion.h2
            className="text-9xl font-extrabold tracking-tighter"
            animate={animation2}
          >
            William
          </motion.h2>
          <motion.p className="text-lg" animate={animation3}>
            A frontend engineer
          </motion.p>
        </div>
        <div className="mt-64 flex flex-col justify-center text-center items-center">
          <p className="mb-2">Scroll down to explore my work</p>
          <BsMouse size={30} />
        </div>
      </Container>
    </>
  );
};
