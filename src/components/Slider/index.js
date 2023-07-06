import { Carousel } from '@mantine/carousel';
import { Box, Image } from '@mantine/core';

import CarouselCard from '../Cards';

import { useStyles } from './styles';

export default function TestimonialSlider() {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      {/* <Title className={classes.title}>{t('lovely_users_say')}</Title> */}

      <Carousel
        mx={60}
        loop
        draggable
        styles={{
          viewport: {
            overflow: 'initial',
          },
          container: {
            alignItems: 'center',
          },
          control: {
            border: 'none',
            background: 'none',
            [`@media (max-width: 576px)`]: {
              background: '#D9D9D9;',
            },
          },
          controls: {
            top: 0,
            bottom: 0,

            [`@media (max-width:576px)`]: {
              top: -100,
            },

            [`@media (max-width: 1200px)`]: {
              top: 450,
            },
          },
        }}
        nextControlIcon={<Image src="/assets/RightArrow.svg" />}
        previousControlIcon={<Image src="/assets/LeftArrow.svg" />}
      >
        <Carousel.Slide>
          <CarouselCard
            title="ANDRE NICOLLIER, 37"
            job="Pharmaceutical sales rep"
            review="Great app for networking! "
            image="/assets/Frame_46.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselCard
            title="Melanie Cho, 39"
            job="Artist"
            review="An app with some of the best coaches in Zurich. "
            image="/assets/Frame_46.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselCard
            title="Patrick Graf, 57"
            job="Reinsurance Rep"
            review="They throw the best networking parties in Zurich"
            image="/assets/Frame_46.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselCard
            title="Marina Sobitan, 30"
            job="Fashion Sales"
            review="I love the coaching aspect of the App!"
            image="/assets/Frame_46.png"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <CarouselCard
            title="Barblin Focke, 41"
            review="Finally a dating app for people over 30! "
            image="/assets/Frame_46.png"
          />
        </Carousel.Slide>
      </Carousel>
    </Box>
  );
}
