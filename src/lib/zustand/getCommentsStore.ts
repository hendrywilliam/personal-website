import { create } from "zustand";
import { supabase } from "../supabase";

type addCommentProps = {
  comments: any;
  getComments: () => void;
};

const initialState = {
  comments: [],
};

export const getCommentStore = create<addCommentProps>()((set) => ({
  ...initialState,
  getComments: async () => {
    let { data, error } = await supabase.from("guestbook").select("*");

    if (data) {
      set({ comments: data });
    }
    if (error) {
      set({ comments: error });
    }
  },
}));
