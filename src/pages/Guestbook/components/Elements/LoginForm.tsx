import React from "react";
import { FaGithub } from "react-icons/fa";

type LoginFromProps = {
  textDisplay: string;
  displayButton: string;
  loginGithub: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

export const LoginForm = ({
  loginGithub,
  textDisplay,
  displayButton,
  children,
}: LoginFromProps) => {
  return (
    <div className="bg-[#111111] p-5">
      <p className="text-3xl xl:text-4xl font-extrabold my-2">{textDisplay}</p>
      <div className="w-full flex gap-2">
        <button
          className={`${displayButton} gap-2 text-sm p-2 my-2 bg-black rounded-lg w-[100px] text-center display`}
          onClick={loginGithub}
        >
          <FaGithub size={20} />
          Github
        </button>
        {children}
      </div>
      <p className="text-sm my-2">
        Your information is only used to display your name.
      </p>
    </div>
  );
};
