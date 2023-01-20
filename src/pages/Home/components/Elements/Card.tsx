import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  children: React.ReactNode;
  uri: string;
};

export const Card = ({ title, children, uri }: Props) => {
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
        className="border-2 bg-black border-white rounded-xl basis-1/2"
      >
        <a
          href={uri}
          className="text-center w-full h-full flex flex-col justify-center  items-center"
        >
          <p className="mb-5">{title}</p>
          <motion.span animate={animation}>{children}</motion.span>
        </a>
      </button>
    </>
  );
};
