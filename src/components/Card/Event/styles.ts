import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  bolderText: {
    fontSize: '1.8vw',
    color: theme.colors.primary[0],
    fontWeight: 600,
    lineHeight: '150%',
    fontStyle: 'normal',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },
  normaltext: {
    fontSize: '1.8vw',
    color: theme.colors.primary[0],
    lineHeight: '150%',
    fontStyle: 'normal',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },

  buyBtn: {
    fontSize: '20px',
    backgroundColor: theme.colors.primary[0],
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '16px 36px',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    },
  },
}));
