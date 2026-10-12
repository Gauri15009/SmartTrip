import COLORS from "./colors";

export const Colors = COLORS;

export const Spacing = {
one: 4,
two: 8,
three: 12,
four: 16,
five: 24,
xs: 4,
sm: 8,
md: 16,
lg: 24,
xl: 32,
};

export const Fonts = {
mono: "monospace",
};

export type ThemeColor = {
light: string;
dark: string;
};

export const MaxContentWidth = 1200;

const theme = {
colors: COLORS,
spacing: {
xs: 4,
sm: 8,
md: 16,
lg: 24,
xl: 32,
},
radius: {
sm: 8,
md: 12,
lg: 18,
xl: 24,
},
};

export default theme;