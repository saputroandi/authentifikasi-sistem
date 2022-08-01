import create from "zustand";
import { User } from "../types";

type StoreState = {
  user: User;
  setUser: (val: string | boolean, key: string) => void;
};

export const useStore = create<StoreState>((set) => ({
  user: {
    email: "",
    password: "",
    isLogin: false,
  },
  setUser(val, key) {
    set((state) => ({ ...state, [key]: val }));
  },
}));
