import { useEffect, useState } from "react";
import { addCommentStore } from "~/lib";
import { getCommentStore } from "~/lib";
import { Navbar } from "~/components";
import { MainLayout } from "~/components";
import { List } from "./components/Elements";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const Guestbook = () => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { comments, getComments } = getCommentStore();
  const { status, sendComment } = addCommentStore();

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
        y: 0,
      });
    }

    if (!inView) {
      animation.start({ opacity: 0, y: -150 });
    }
  }, [inView]);

  useEffect(() => {
    getComments();
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <motion.div
        ref={ref}
        className="pt-16 xl:pt-32 h-full flex justify-center items-center"
        animate={animation}
      >
        <div className="w-full xl:w-1/4 flex flex-col gap-2 p-4 xl:p-0">
          <p className="text-3xl xl:text-6xl font-extrabold">Guestbook.</p>
          <p>
            Please <span className="font-bold">do not spam</span> and show some
            respect.
          </p>
          <input
            className="text-sm xl:text-base pb-2 focus:outline-none bg-black border-b-2 border-white"
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            className="text-sm xl:text-base pb-2 mt-3 focus:outline-none bg-black border-b-2 border-white resize-none"
            placeholder="Your feedback"
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="text-end">
            <button
              className="disabled:opacity-25"
              onClick={() => {
                sendComment(name, content);
                setTimeout(() => {
                  getComments();
                }, 2000);
              }}
              disabled={name && content ? false : true}
            >
              POST
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full h-max flex justify-center p-4">
        <ul className="w-full xl:w-1/4 flex flex-col gap-2">
          {comments.map((comment: any) => {
            return (
              <List
                key={comment.id}
                name={comment.name}
                content={comment.content}
              />
            );
          })}
        </ul>
      </motion.div>
    </MainLayout>
  );
};
