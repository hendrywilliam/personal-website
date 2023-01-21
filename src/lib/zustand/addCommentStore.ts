import { create } from "zustand";
import { supabase } from "../supabase";

export type addCommentStore = {
  status: string;
  sendComment: (name: string, content: string) => void;
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

    if (data) {
      set({ status: "success" });
    }

    if (error) {
      set({ status: "failed" });
    }
  },
}));
