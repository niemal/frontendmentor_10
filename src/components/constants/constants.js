export const COLORS = {
  pale_violet: "hsl(276, 100%, 81%)",
  moderate_violet: "hsl(276, 55%, 52%)",
  desat_dark_violet: "hsl(271, 15%, 43%)",
  gray_blue: "hsl(206, 6%, 79%)",
  very_dark_desat_violet: "hsl(271, 36%, 24%)",
  dark_gray_violet: "hsl(270, 7%, 64%)",
  light_magenta: "hsl(293, 100%, 63%)",
  light_violet: "hsl(264, 100%, 61%)",
  white: "hsl(0, 0%, 100%)",
  light_gray_violet: "hsl(270, 20%, 96%)",
  very_light_magenta: "hsl(289, 100%, 72%)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1250,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
};
