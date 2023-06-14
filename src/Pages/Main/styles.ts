import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  bgImage: {
    width: '100%',
    height: '100vh',
    maxHeight: 1080,

    position: 'relative',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      maxHeight: 300,
    },
  },

  burger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
  },
}));
