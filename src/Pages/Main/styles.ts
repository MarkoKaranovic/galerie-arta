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

  heroTitle: {
    color: 'white',
    fontSize: theme.fontSizes.xl,
    fontWeight: 700,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.sm,
    },
  },

  cardWrapper: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'block',
      padding: '0',
    },
  },

  animationCard: {
    padding: '135px 118px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gap: '20px',
      background: theme.colors.primary[0],
      padding: '20px',
    },
  },
  animationCardTitle: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: { fontSize: theme.fontSizes.xs },
  },
  animationCardDescription: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.xxs,
      textAlign: 'center',
      fontWeight: 500,
    },
  },

  inviteWrapper: {
    padding: '61px 40px',
    backgroundColor: '#FFFBF5',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '20px 0 0 0px',
    },
  },

  inviteBox: {
    position: 'relative',
    padding: '0 80px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'block',
      padding: '90px 0px 0px 0px',
    },
  },

  inviteTitle: {
    fontSize: '70px',
    color: theme.colors.primary[1],
    fontWeight: 600,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },

  inviteDescription: {
    fontSize: theme.fontSizes.s,
    color: theme.colors.primary[1],
    fontWeight: 400,
    fontFamily: 'Roboto',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.xxs,
      textAlign: 'center',
      color: 'black',
      padding: '20px 24px',
      fontWeight: 500,
    },
  },

  eventWrapper: {
    paddingLeft: '40px',
    paddingRight: '75px',
    backgroundColor: '#D9D9D9',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'block',
      padding: '0px 24px ',
    },
  },

  eventTitle: {
    fontSize: '70px',
    fontWeight: 600,
    paddingLeft: '80px',
    color: theme.colors.primary[1],
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.sm,
      paddingLeft: 0,
      paddingTop: '40px',
      textTransform: 'uppercase',
      color: theme.colors.primary[0],
    },
  },

  eventSliderWrapper: {
    paddingTop: 33,
    paddingBottom: 200,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      paddingBottom: '0',
    },
  },

  servicesWrapper: {
    paddingTop: '200px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'block',
      position: 'relative',
      padding: 0,
    },
  },
  servicesImage: {
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      position: 'absolute',
      maxHeight: '372px',
      isolation: 'isolate',
      filter: 'blur(1px)',
      '& img': {
        height: '490px !important',
      },
    },
  },

  servicesTextWrapper: {
    paddingTop: '100px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '50px 24px',
      gap: '50px',
    },
  },

  servicesTitle: {
    color: theme.colors.primary[0],
    fontSize: '70px',
    fontWeight: 700,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '36px',
      textAlign: 'center',
      fontWeight: 600,
      position: 'relative',
      zIndex: 1,
    },
  },

  servicesParagprah: {
    color: theme.colors.primary[1],
    fontSize: '18px',
    fontWeight: 400,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '16px',
      textAlign: 'center',
      fontWeight: 500,
      position: 'relative',
      zIndex: 1,
      color: 'white',
    },
  },

  giftWrapper: {
    paddingTop: '200px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'block',
      position: 'relative',
      padding: 0,
      marginTop: '50px',
    },
  },

  giftTextWrapper: {
    paddingTop: '100px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      padding: '50px 24px',
      gap: 30,
    },
  },
  giftTitle: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.primary[0],
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '36px',
      fontWeight: 600,
    },
  },
  giftParagraph: {
    color: theme.colors.primary[1],
    fontSize: theme.fontSizes.s,
    fontWeight: 400,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: '16px',
      textAlign: 'center',
      fontWeight: 600,
    },
  },
}));
