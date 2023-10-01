import { getRandomCapitals, getRandomContry, getRandomNames } from "@/api/countries";
import { Country } from "@/models/country";
import { create } from "zustand";

interface CountryState {
  country: Country;
  randomNames: string[];
  randomCapitals: string[];
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
  randomNames: [""],
  randomCapitals: [""],

  loading: false,
  generateCountry: async () => {
    set({ loading: true });
    const country = await getRandomContry();
    if (country.country) {
      set({ country: country.country });
      const randomNames = await getRandomNames(country.country.name)
      set({randomNames:randomNames})
      const randomCapitals = await getRandomCapitals(country.country.capital)
      set ({randomCapitals:randomCapitals})
    }
    
    ;
    const timeout = setTimeout(()=>{set({ loading: false })}, 1500)
  },
}));

interface TurnState {
  turn: number;
  start: () => void;
  reset: () => void;
  quit: () => void;
  nextLevel: () => void;
}
export const useLevelStore = create<TurnState>((set) => ({
  turn: 0,
  start: () => set({ turn: 1 }),
  reset: () => set({ turn: 0 }),
  quit: () => set({ turn: 21 }),
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
