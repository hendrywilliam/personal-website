import { create } from "zustand";
import { supabase } from "../supabase";

type socialAuth = {
  credential: object | null | string;
  status: string;
  loginGithub: () => void;
  getUser: () => void;
  logout: () => void;
};

const initialState = {
  credential: null,
  status: "",
};

export const socialAuth = create<socialAuth>()((set) => ({
  ...initialState,
  loginGithub: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  },
  getUser: async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (user) {
      set({ credential: user.identities[0].identity_data.full_name });
    }

    if (error) {
      set({ credential: null });
    }
  },
  logout: async () => {
    let { error } = await supabase.auth.signOut();
    set({ credential: null });
  },
}));
