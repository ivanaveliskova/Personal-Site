import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Roboto", "Arial", "sans-serif"],
  bodyFontFamily: ["Roboto", "Arial", "sans-serif"],
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
