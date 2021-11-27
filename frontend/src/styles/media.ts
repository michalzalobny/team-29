export const breakpoints = {
  tablet: 767,
  desktop: 1920,
};

const customMediaQuery = (minWidth: number) =>
  `@media only screen and (min-width: ${minWidth / 16}em)`;

export const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(breakpoints.tablet),
  desktop: customMediaQuery(breakpoints.desktop),
};
