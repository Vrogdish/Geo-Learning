import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark":"linear-gradient(156deg, rgba(38,15,2,1) 0%, rgba(0,0,0,1) 100%)"
      },
      boxShadow: {
        "light": " 0px 0px 30px 2px rgba(255,203,112,0.8)",
      },
      dropShadow : {
        "light": "0px 0px 30px 2px rgba(255,203,112,0.8)"
      },

      keyframes: {
        rightMove: {
          '0%,100%': { transform: 'translate(0)',
 
         },
          '50%': { transform: 'translate(10px)',
       
        },

        
        },
        plane : {
          "0%" : { transform : "scale(0)", "opacity" :"0"},
          "50%" : { "opacity" : "1"},
          "100%" : {transform : "scale(5)", "opacity" : "0"} 
        }
      },

      animation : {
        "ping-both" : "ping 1.5s cubic-bezier(0, 0, 0.2, 1) both",
        "next" : "rightMove 1.5s ease-out infinite ",
        "plane" : "plane 2s ease-in both"
      }
    },
  },
  plugins: [],
};
export default config;
