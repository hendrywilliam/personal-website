import { create } from "zustand";
import { supabase } from "../supabase";

type SocialAuth = {
  credential: object | null | string | undefined;
  status: string;
  loginGithub: () => void;
  getUser: () => void;
  logout: () => void;
};

type UserProps = {
  user?: {
    identities?: any;
  };
};

const initialState = {
  credential: null,
  status: "",
};

export const socialAuth = create<SocialAuth>()((set) => ({
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
      const data = user?.identities?.[0].identity_data.full_name;
      set({ credential: data });
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
