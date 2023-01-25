import { create } from "zustand";
import { supabase } from "../supabase";

type addCommentStore = {
  status: string;
  sendComment: (name: any, content: string) => void;
};

const initialState = {
  status: "",
};

export const addCommentStore = create<addCommentStore>((set) => ({
  ...initialState,
  sendComment: async (name, content) => {
    const { data, error } = await supabase
      .from("guestbook")
      .insert([{ name: name, content: content }]);
  },
}));
