import { Carousel } from '@mantine/carousel';
import { Flex, Image, Text } from '@mantine/core';

import React from 'react';

export default function Gallery() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      pt={80}
      pb={40}
      gap={20}
    >
      <Text
        size={70}
        fw={700}
        color="rgba(8, 68, 83, 1)"
      >
        GALERIJA
      </Text>
      <Text
        size={24}
        fw={700}
        color="rgba(8, 68, 83, 1)"
      >
        OBOJAJ SVOJE SRCE
      </Text>
      <Text
        size={18}
        fw={700}
        color="rgba(8, 68, 83, 1)"
      >
        Bili smo tamo, slikali zalaske sunca i krajolike. I htjeli <br /> smo promijeniti stvari. Zato biramo teme za
        slikanje <br /> koje su u trendu, neuobičajene i uvijek vrijedne odmah. <br /> Pogledajte neke od naših
        omiljenih radova ili usudimo <br /> se reći... remek-djela?
      </Text>
      <Carousel
        slideSize="10.333333%"
        draggable
        dragFree
        loop
        align="start"
        // slidesToScroll={1}
      >
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>

        <Carousel.Slide>
          {' '}
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex
            direction="column"
            justify="center"
            align="center"
          >
            <Image
              width="325px"
              src="/assets/Frame 46.png"
            />
          </Flex>
        </Carousel.Slide>
      </Carousel>
    </Flex>
  );
}
