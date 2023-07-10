/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        "cyan-bluish-gray": "#abb8c3",
        white: "#ffffff",
        "pale-pink": "#f78da7",
        "vivid-red": "#cf2e2e",
        "luminous-vivid-orange": "#ff6900",
        "luminous-vivid-amber": "#fcb900",
        "light-green-cyan": "#7bdcb5",
        "vivid-green-cyan": "#00d084",
        "pale-cyan-blue": "#8ed1fc",
        "vivid-cyan-blue": "#0693e3",
        "vivid-purple": "#9b51e0",
        "ast-global-color-0": "var(--ast-global-color-0)",
        "ast-global-color-1": "var(--ast-global-color-1)",
        "ast-global-color-2": "var(--ast-global-color-2)",
        "ast-global-color-3": "var(--ast-global-color-3)",
        "ast-global-color-4": "var(--ast-global-color-4)",
        "ast-global-color-5": "var(--ast-global-color-5)",
        "ast-global-color-6": "var(--ast-global-color-6)",
        "ast-global-color-7": "var(--ast-global-color-7)",
        "ast-global-color-8": "var(--ast-global-color-8)",
      },
      gradients: {
        "vivid-cyan-blue-to-vivid-purple":
          "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
        "light-green-cyan-to-vivid-green-cyan":
          "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
        "luminous-vivid-amber-to-luminous-vivid-orange":
          "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
        "luminous-vivid-orange-to-vivid-red":
          "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
        "very-light-gray-to-cyan-bluish-gray":
          "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
        "cool-to-warm-spectrum":
          "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
        "blush-light-purple":
          "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
        "blush-bordeaux":
          "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
        "luminous-dusk":
          "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
        "pale-ocean":
          "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
        "electric-grass":
          "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
        midnight:
          "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
      },
      fontSize: {
        small: "13px",
        medium: "20px",
        large: "36px",
        "x-large": "42px",
      },
      spacing: {
        20: "0.44rem",
        30: "0.67rem",
        40: "1rem",
        50: "1.5rem",
        60: "2.25rem",
        70: "3.38rem",
        80: "5.06rem",
      },
      boxShadow: {
        natural: "6px 6px 9px rgba(0, 0, 0, 0.2)",
        deep: "12px 12px 50px rgba(0, 0, 0, 0.4)",
        sharp: "6px 6px 0px rgba(0, 0, 0, 0.2)",
        outlined:
          "6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1)",
        crisp: "6px 6px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
