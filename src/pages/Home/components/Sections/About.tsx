import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Container } from "../Elements";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        transition: {
          type: "spring",
          duration: 3,
        },
        opacity: 1,
      });
    }

    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <>
      <Container
        styles="min-h-screen h-screen w-full flex flex-col items-center justify-center"
        id="about"
      >
        <div
          ref={ref}
          className="h-1/2 w-full flex flex-col items-center justify-center"
        >
          <motion.div className="w-1/4" animate={animation}>
            <p className="text-6xl font-extrabold">About.</p>
            <p className="text-lg mt-2">
              Hello there, my name is Hendri William, I am a frontend engineer
              based in Indonesia. I love to create things like websites,
              applications, or anything! I wrote my first "hello mom" in VB6
              when i was in junior highschool. My goal is to always build a good
              quality product.
            </p>
            <p className="text-lg mt-2">
              Here are a few technologies I've been working with recently:{" "}
              <span className="font-medium">
                HTML5, CSS3, Javascript (ES6+), React.js, Next.js, Typescript,
                Framer Motion, Node.js, Zustand, Redux, Tailwind CSS, Bootstrap,
                Chakra UI.
              </span>
            </p>
          </motion.div>
        </div>
      </Container>
    </>
  );
};
