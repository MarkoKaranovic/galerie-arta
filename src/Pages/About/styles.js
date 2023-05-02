import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  bgImage: {
    width: '100%',
    height: '100vh',

    position: 'relative',
  },

  burger: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
  },
}));
