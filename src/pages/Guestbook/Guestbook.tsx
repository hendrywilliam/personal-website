import { useEffect, useState, Suspense } from "react";
import { addCommentStore, getCommentStore, socialAuth } from "~/lib";
import { Navbar } from "~/components";
import { MainLayout } from "~/components";
import { List, Loading } from "./components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { LoginForm } from "./components";
import { useNavigate } from "react-router-dom";

export const Guestbook = () => {
  const { comments, getComments } = getCommentStore();
  const [content, setContent] = useState<string>("");
  const { sendComment } = addCommentStore();
  const { loginGithub, getUser, credential, logout } = socialAuth();
  const navigate = useNavigate();

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

  const submitComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendComment(credential, content);
    setTimeout(() => {
      getComments();
    }, 2000);
  };

  useEffect(() => {
    getComments();
    getUser();
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <motion.div
        ref={ref}
        className="pt-16 xl:pt-32 h-full flex justify-center items-center"
        animate={animation}
      >
        <div className="w-full xl:w-1/2 flex flex-col gap-2 p-4 xl:p-0">
          <p className="text-3xl xl:text-6xl font-extrabold">Guestbook.</p>
          <p>
            Consider to leave a comment before you leaving. It could be anything
            – appreciation, information, or even a joke.
          </p>
          <LoginForm
            textDisplay={
              credential
                ? `Hello, ${credential}!`
                : "You have to login before comment."
            }
            displayButton={credential ? "hidden" : "flex"}
            loginGithub={() => loginGithub()}
          >
            <div className="w-full">
              <form
                className={`${credential ? "flex" : "hidden"} flex-row gap-4`}
              >
                <input
                  type="text"
                  className="w-full px-2"
                  onChange={(e) => setContent(e.target.value)}
                />
                <button
                  type="submit"
                  className="font-bold"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    submitComment(e)
                  }
                >
                  Post
                </button>
              </form>
            </div>
          </LoginForm>
          <div className="w-full text-end">
            <button
              className={`${credential ? "inline" : "hidden"} font-bold`}
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div className="w-full h-max flex justify-center p-4">
        <Suspense fallback={<Loading />}>
          <ul className="w-full xl:w-1/2 flex flex-col gap-2">
            {comments.map((comment: any) => {
              const date = comment.created_at.slice(0, 10);
              const time = comment.created_at.slice(11, 19);
              return (
                <List
                  key={comment.id}
                  name={comment.name}
                  content={comment.content}
                  date={date}
                  time={time}
                />
              );
            })}
          </ul>
        </Suspense>
      </motion.div>
    </MainLayout>
  );
};
