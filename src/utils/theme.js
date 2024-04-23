import { css } from 'styled-components';
import colors from './colors';

const DEFAULT_SPACING = 8;

const spacing = {
  xxs: DEFAULT_SPACING / 2,
  xs: DEFAULT_SPACING,
  sm: DEFAULT_SPACING * 2,
  md: DEFAULT_SPACING * 3,
  lg: DEFAULT_SPACING * 4,
  xl: DEFAULT_SPACING * 5,
};

export const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
  xxs: 450,
};

const fontSize = {
  main: '14px',
  label: '12px',
  label2: '16px',
  input: '16px',
  title: '32px',
  title2: '46px',
};

const iconSize = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};

const rules = {
  mdToLg: `(min-width: ${sizes.md}px) and (max-width: ${sizes.lg}px)`,
  smToMd: `(min-width: ${sizes.sm}px) and (max-width: ${sizes.md}px)`,
  smToLg: `(min-width: ${sizes.sm}px) and (max-width: ${sizes.lg}px)`,
  xsToSm: `(min-width: ${sizes.xs}px) and (max-width: ${sizes.sm}px)`,
  xsToMd: `(min-width: ${sizes.xs}px) and (max-width: ${sizes.md}px)`,
};

const buildQueries = (keys, returnCss) =>
  Object.keys(keys).reduce(
    (acc, label) => ({
      ...acc,
      [label]: returnCss(label),
    }),
    {},
  );

const defaultQueries = buildQueries(
  sizes,
  label => (literals, ...placeholders) =>
    css`
      @media only screen and (max-width: ${sizes[label] - 1}px) {
        ${css(literals, ...placeholders)};
      }
    `.join(''),
);

const minMaxQueries = buildQueries(
  rules,
  label => (literals, ...placeholders) =>
    css`
      @media only screen and ${rules[label]} {
        ${css(literals, ...placeholders)};
      }
    `.join(''),
);

export const theme = {
  color: {
    ...colors,
  },
  font: {
    regular: 'Lato-Regular',
    bold: 'Lato-Bold',
    black: 'Lato-Black',
    italic: 'Lato-Italic',
  },
  defaultShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.1)',
  media: {
    ...defaultQueries,
    ...minMaxQueries,
  },
  fontSize,
  iconSize,
  spacing,
  sizes,
};

export default theme;
