export const Fonts = {
  merriweatherBlack: 'Merriweather',
} as const;

export type FontName = keyof typeof Fonts;
