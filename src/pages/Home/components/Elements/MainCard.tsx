import { FaGithub } from "react-icons/fa";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MainCardProps = {
  title: string;
};

export const MainCard = ({ title }: MainCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        transition: {
          duration: 1,
        },
        opacity: 1,
        x: 0,
      });
    }

    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <>
      <button
        ref={ref}
        className="border-2 bg-black border-white h-64 w-full rounded-xl basis-1/2"
      >
        <a
          href="https://github.com/hendrywilliam"
          className="text-center w-full h-full flex flex-col justify-center  items-center"
        >
          <p className="mb-5 text-lg">{title}</p>
          <motion.span animate={animation}>
            <FaGithub size={40} />
          </motion.span>
        </a>
      </button>
    </>
  );
};
