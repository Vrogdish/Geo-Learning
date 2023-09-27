import { create } from "zustand";

interface CountDownState {
    time : number
    // start : ()=>void
    // stop: ()=>void
    reset: ()=>void
    setTime : (newTime : number)=>void
}

export const UseCountDown = create<CountDownState>((set)=>({
    time : 5,
    reset : ()=> set({time : 5}),
    setTime : (newTime : number)=>set({time : newTime})
}))