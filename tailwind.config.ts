import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lg_red_active: "var(--lg_red_active)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        deep_secondary: "var(--deep_secondary)",
        light_primary: "var(--light_primary)",
        bg_gray: "var(--bg_gray)",
        error: "var(--error)",
        gray_900: "var(--gray_900)",
        gray_800: "var(--gray_800)",
        gray_700: "var(--gray_700)",
        gray_600: "var(--gray_600)",
        gray_500: "var(--gray_500)",
        gray_400: "var(--gray_400)",
        gray_300: "var(--gray_300)",
        gray_200: "var(--gray_200)",
        gray_100: "var(--gray_100)",
        black: "var(--black)",
        popup_bg: "var(--popup_bg)",
      },
      // 반응형
      backgroundImage: {
        mainOverview: "url('./assets/images/ig_main.svg')",
        mobileMainOverview: "url('./assets/images/ig_m_main.svg')",
        mainGradient: "linear-gradient(309deg, #AAC8DD 0%, #E4F4FF 100%)",
        checkBoxBg: "url('./assets/icons/ic_checked.svg')",
      },
      screens: {
        mobile: { min: "320px", max: "1079px" },
        tablet: { min: "1080px", max: "1499px" },
        pc: { min: "1500px" },
      },
      fontFamily: {
        LGSMHATR: ["var(--font-LGSMHATR)", "sans-serif"],
        LGSMHATL: ["var(--font-LGSMHATL)", "sans-serif"],
        LGSMHATSB: ["var(--font-LGSMHATSB)", "sans-serif"],
        LGSMHATB: ["var(--font-LGSMHATB)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
