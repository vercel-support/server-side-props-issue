const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        xxl: { min: "2000px" },
      },
      fontSize: {
        ...defaultTheme.fontSize,
        xxs: "0.65rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        geist: {
          40: "#f5f5f7",
          50: "#fafafa",
          100: "#eaeaea",
        },
        dark: {
          1100: "#212121",
          1000: "#2B2B2B",
          900: "#404040",
          850: "rgb(57, 57, 57)",
          800: "#4D4D4D",
          700: "#5e5e5e",
          600: "#676767",
          500: "#a6a6a6",
          400: "#CFCFCF",
          300: "#D9D9D9",
          200: "#ebebeb",
          100: "#FFFFFF",
        },
        // dark: {
        //   1100: "#1F2127", // done
        //   1000: "#1F2127", // done
        //   900: "#1F2127", // done
        //   800: "#282D36", // done
        //   700: "#383E47", // done
        //   600: "#676767",
        //   500: "#a6a6a6",
        //   400: "#CFCFCF",
        //   300: "#D9D9D9",
        //   200: "#ebebeb",
        //   100: "#FFFFFF",
        // },
        primary: {
          50: "#f7f8ff",
          100: "#F0F2FE",
          200: "#DAE0FC",
          300: "#C4CDFB",
          400: "#97A7F7",
          500: "#6B81F4",
          600: "#6074DC",
          700: "#404D92",
          800: "#303A6E",
          900: "#202749",
        },
      },
      typography: (theme) => ({
        default: {
          css: {
            color: theme("colors.gray.700"),
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.900"),
            },
            a: {
              color: theme("colors.gray.900"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.800"),
            },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      backgroundColor: ["group-focus"],
      outline: ["group-focus"],
      borderRadius: ["group-focus"],
      opacity: ["responsive", "hover", "focus", "disabled"],
    },
    cursor: ["responsive", "hover", "focus", "disabled"],
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover",
      "odd",
      "even",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
