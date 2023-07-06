import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
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
