import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  navigationContainer: {
    position: 'absolute',
    padding: '35px 40px',
    width: '95%',
    backgroundColor: theme.colors.secondary[0],
    zIndex: 1,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      position: 'fixed',
      backgroundColor: 'white',
      padding: 10,
      zIndex: 1,
      width: '100%',
      opacity: 0.9,
    },
  },
  burger: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    alignSelf: 'right',
    right: 0,
    opacity: 1,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'flex',
    },
  },

  navigationItem: {
    fontSize: '20px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    },
  },
  navigationItemReservation: {
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
