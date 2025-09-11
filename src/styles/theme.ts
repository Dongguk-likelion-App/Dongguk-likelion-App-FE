const theme = {
  colors: {
    Neutral: {
      N70: '#2A2A2E',
      N50: '#52525B',
      N40: '#71717A',
      N30: '#A1A1AA',
      N10: '#E4E4E7',
      N00: '#F4F4F5',
      WHITE: '#FFFFFF',
    },
    Primary: {
      B60: '#EB680D',
      B50: '#F48335',
      B40: '#F19A53',
      B30: '#FDBA74',
      B20: '#FED7AA',
      B10: '#FFEDD5',
    },
    Warning: {
      G30: '#337636',
      G00: '#E6F6E6',
      W30: '#D77F05',
      W20: '#F0BB4A',
      W10: '#F1D888',
      W00: '#F8F4C7',
      R30: '#F04343',
      R20: '#FFA6A6',
      R00: '#FFECEC',
    },
  },

  fontFamily: {
    regular: 'SUITE-Regular',
    semibold: 'SUITE-SemiBold',
    bold: 'SUITE-Bold',
    extrabold: 'SUITE-ExtraBold',
  },

  typography: {
    Head1_1: { fontSize: 32, lineHeight: 40, fontFamily: 'SUITE-ExtraBold' },
    Head1_2: { fontSize: 32, lineHeight: 40, fontFamily: 'SUITE-Bold' },
    Head2_1: { fontSize: 24, lineHeight: 32, fontFamily: 'SUITE-ExtraBold' },
    Head2_2: { fontSize: 24, lineHeight: 32, fontFamily: 'SUITE-Bold' },
    Head3_1: { fontSize: 20, lineHeight: 26, fontFamily: 'SUITE-ExtraBold' },
    Head3_2: { fontSize: 20, lineHeight: 26, fontFamily: 'SUITE-Bold' },
    Body1_1: { fontSize: 16, lineHeight: 24, fontFamily: 'SUITE-Bold' },
    Body1_2: { fontSize: 16, lineHeight: 24, fontFamily: 'SUITE-SemiBold' },
    Body1_3: { fontSize: 16, lineHeight: 24, fontFamily: 'SUITE-Regular' },
    Body2_1: { fontSize: 14, lineHeight: 21, fontFamily: 'SUITE-SemiBold' },
    Body2_2: { fontSize: 14, lineHeight: 21, fontFamily: 'SUITE-Regular' },
    Small1_1: { fontSize: 12, lineHeight: 18, fontFamily: 'SUITE-SemiBold' },
    Small1_2: { fontSize: 12, lineHeight: 18, fontFamily: 'SUITE-Regular' },
    Small2_1: { fontSize: 10, lineHeight: 15, fontFamily: 'SUITE-SemiBold' },
    Small2_2: { fontSize: 10, lineHeight: 15, fontFamily: 'SUITE-Regular' },
  },

  space: {
    XXS: 0,
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 32,
    XXL: 40,
    XXXL: 52,
  },

  radius: {
    XS: 0,
    S: 4,
    M: 8,
    L: 12,
    XL: 16,
    FULL: 9999,
  },

  grid: {
    margin8: 8,
    margin16: 16,
    margin24: 24,
  },
};

export default theme;
export type ThemeType = typeof theme;
