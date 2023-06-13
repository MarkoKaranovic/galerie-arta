import { useTheme } from '@emotion/react';
import { Box, Flex, Image, Rating, Stack, Text, Title } from '@mantine/core';
import React from 'react';

import { useStyles } from './styles';

function CarouselCard({ title, job, review, image }) {
  const { classes } = useStyles();

  const theme = useTheme();

  return (
    <Box className={classes.container}>
      <Box style={{ borderRadius: '50px' }}>
        <Image
          styles={{
            image: {
              borderRadius: 255,
              width: '370px !important',
              height: '370px !important',

              [`@media (max-width: ${theme?.breakpoints.xl}px)`]: {
                width: '200px !important',
                height: '200px !important',
              },
            },
          }}
          className={classes.cardImg}
          src={image}
        />
      </Box>
      <Flex className={classes.content}>
        {/* <Image
          className={classes.quotesImg}
          src="/assets/images/quotes.svg"
        /> */}
        <Stack>
          <Text className={classes.text}>{review}</Text>

          <Rating
            size="sm"
            value={5}
            color="light"
            styles={{
              root: { color: '#FFD700' },
              symbolBody: {
                stroke: '#FFD700',
                path: '#FFD700',

                svg: {
                  fill: '#FFD700',
                },
              },
            }}
          />
          <Title
            color="light.1"
            size={28}
          >
            {title}
          </Title>
          <Text
            color="light.0"
            size={16}
          >
            {job}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export default CarouselCard;
