/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#3ECF4C",
          400: "#6BE26B",
          300: "#94F08B",
          200: "#C0FAB4",
          100: "#E2FCD9CC",
          background: "#FFFFFF",
          hover: "#35b64a",
        },
        secondary: {
          default: "#FFBD3A",
          400: "#FFD26B",
          300: "#FFDF88",
          200: "#FFECB0",
          100: "#FFF7D7CC",
          background: "#F9FAFC",
        },
        tertiary: {
          default: "#F64920",
          400: "#F98256",
          300: "#FCA578",
          200: "#FECAA5",
          100: "#FEE8D2CC",
        },
        base: "#F4F5FA",
        border: "#3A35411F",
        info: {
          pressed: "#044AA2",
          hover: "#0663C2",
          default: "#0980E2",
          background: "#EBF9FE",
        },
        success: {
          pressed: "#1C9675",
          hover: "#28B380",
          default: "#38D189",
          background: "#E0FDDF",
        },
        warning: {
          pressed: "#B5A40D",
          hover: "#D8C613",
          default: "#FCE91B",
          background: "#FCF8CA",
        },
        error: {
          pressed: "#B72315",
          hover: "#DB3D1F",
          default: "#FF5C2B",
          background: "#FCE3D1",
        },
        "gray-scale": {
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9E9E9E",
          400: "#BDBDBD",
          300: "#E0E0E0",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
      },
      textColor: {
        dark: {
          primary: "#222325",
          secondary: "#333333AD",
          disabled: "#3A354161",
        },
        light: {
          primary: "#FFFFFF",
          secondary: "#C1C2C4",
          disabled: "#9D9EA1",
        },
      },
      backgroundImage: {
        "gradient-info": "linear-gradient(to right, #004CE8, #6F9EFF)",
        "gradient-success": "linear-gradient(to right, #00C247, #73FFA6)",
        "gradient-warning": "linear-gradient(to right, #FFE16A, #FFE58036)",
        "gradient-error": "linear-gradient(to right, #FF3333, #FF8A9B)",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // Font Poppins untuk heading
        body: ["DM Sans", "sans-serif"], // Font DM Sans untuk body
        openSans: ["Open Sans", "sans-serif"], // Font Open Sans untuk Body Medium dan Small
        subtitle: ["Poppins", "sans-serif"], // Font Poppins untuk heading
      },
      fontSize: {
        "heading-1": ["48px", "52.8px"], // Heading 1
        "heading-2": ["40px", "44px"], // Heading 2
        "heading-3": ["32px", "35.2px"], // Heading 3
        "heading-3-mobile": ["24px", "26.4px"], // Heading 3 mobile
        "heading-4": ["24px", "28.8px"], // Heading 4
        "heading-5": ["20px", "24px"], // Heading 5
        "heading-6": ["18px", "21.6px"], // Heading 6
        "heading-6-mobile": ["16px", "19.2px"], // Heading 6
        large: ["18px", "25.2px"], // Body Large
        "body-large": ["18px", "25.2px"], // Body Medium
        "body-medium": ["16px", "22.4px"], // Body Medium
        "body-medium-mobile": ["14px", "19.6px"], // Body Medium
        "body-small": ["14px", "19.6px"], // Body Small
        "body-small-mobile": ["12px", "16.8px"], // Body Small
        subtitle: ["16px", "24px"], // Subtitle
      },
      fontWeight: {
        "heading-1": 700, // Font weight untuk Heading 1
        "heading-2": 600, // Font weight untuk Heading 2
        "heading-3": 600, // Font weight untuk Heading 3
        "heading-4": 600, // Font weight untuk Heading 4
        "heading-5": 600, // Font weight untuk Heading 5
        "heading-6": 600, // Font weight untuk Heading 6
        "large-bold": 700, // Font weight 700 untuk Body Large Bold
        "large-medium": 500, // Font weight 500 untuk Body Large Medium
        "large-regular": 400, // Font weight 400 untuk Body Large Regular
        "medium-bold": 700, // Font weight 700 untuk Body Medium Bold
        "medium-medium": 500, // Font weight 500 untuk Body Medium Medium
        "medium-regular": 400, // Font weight 400 untuk Body Medium Regular
        "small-bold": 700, // Font weight 700 untuk Body Small Bold
        "small-medium": 600, // Font weight 600 untuk Body Small Medium
        "small-regular": 400, // Font weight 400 untuk Body Small Regular
        "subtitle-regular": 400, // Font weight 400 untuk Subtitle Regular
      },
      letterSpacing: {
        large: "0.2px", // Letter spacing untuk Body Large
        medium: "0.2px", // Letter spacing untuk Body Medium
        small: "0.2px", // Letter spacing untuk Body Small
        subtitle: "0.15px", // Letter spacing untuk Subtitle
      },
    },
  },
  plugins: [],
};
