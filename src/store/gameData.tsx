import { getRandomContry } from "@/api/countries";
import { Country } from "@/models/country";
import { create } from "zustand";

interface CountryState {
  country: Country;
  loading: boolean;
  generateCountry: () => void;
}

export const useCountryStore = create<CountryState>((set) => ({
  country: {
    code: "",
    name: "",
    capital: "",
    flagUrl: "",
    region: "",
  },
  loading: true,
  generateCountry: async () => {
    set({ loading: true });
    const res = await getRandomContry();
    if (res.country) {
      set({ country: res.country });
      set({loading : false})
    }
  },
}));

interface TurnState {
  turn: number;
  start: () => void;
  reset: () => void;
  nextLevel: () => void;
}
export const useLevelStore = create<TurnState>((set) => ({
  turn: 0,
  start: () => set({ turn: 1 }),
  reset: () => set({ turn: 0 }),
  nextLevel: () => set((state) => ({ turn: state.turn + 1 })),
}));

interface LoadingState {
  loading: boolean;
  setIsLoading: (state: boolean) => void;
}

export const useLoadingState = create<LoadingState>((set) => ({
  loading: false,
  setIsLoading: (state) => set({ loading: state }),
}));
