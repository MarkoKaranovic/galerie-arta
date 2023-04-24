import { BackgroundImage, Box, Burger, Button, Container, Flex, Image, Text } from '@mantine/core';
import React from 'react';
import { useStyles } from './styles';

export default function Main() {
  const { classes } = useStyles();

  return (
    <Container
      size="100%"
      style={{
        overflow: 'hidden',
        padding: 0,
      }}
    >
      <BackgroundImage
        className={classes.bgImage}
        src="/assets/logo.png"
      >
        <Flex
          bg="#FFFBF5"
          justify="space-between"
          width="100%"
          p="30px 40px"
        >
          <Burger
            size="md"
            color="white"
            w="60px"
            h="60px"
            bg="#084453"
            className={classes.burger}
          />

          <Image
            pos="relative"
            width={100}
            height="100%"
            src="/assets/logo-white.svg"
          />
          <Button
            radius={25}
            size="xl"
            bg="#084453"
          >
            REZERVIRAJ KARTU
          </Button>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align="center"
          h="100%"
        >
          <Text
            color="white"
            size="120px"
            fw={700}
          >
            ISKUSI ZABAVU, <br /> OKUSI UŽITAK
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex
        bg="#084453"
        p="135px 161px"
        gap={112}
      >
        <Flex
          direction="column"
          gap={120}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />

          <Text color="white">
            Ne morate ponijeti ništa. Ni slikarsko <br /> iskustvo nije potrebno.Samo se pokažite spremni za zabavu, a
            mi ćemo pokriti ostalo. Uz čašu vina, sve je lakše pa tako i potezi kistom. Opusti se uz izbor vina
            odabranih slavonskih vinarija.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={120}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />

          <Text color="white">
            Ne morate ponijeti ništa. Ni slikarsko iskustvo nije potrebno.Samo se pokažite spremni za zabavu, a mi ćemo
            pokriti ostalo. Uz čašu vina, sve je lakše pa tako i potezi kistom. Opusti se uz izbor vina odabranih
            slavonskih vinarija.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={120}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />

          <Text color="white">
            Ne morate ponijeti ništa. Ni slikarsko iskustvo nije potrebno.Samo se pokažite spremni za zabavu, a mi ćemo
            pokriti ostalo. Uz čašu vina, sve je lakše pa tako i potezi kistom. Opusti se uz izbor vina odabranih
            slavonskih vinarija.
          </Text>
        </Flex>
      </Flex>

      <Flex p="75px 75px">
        <Box>
          <Image src="/assets/brushMarker.svg" />
          <Box>
            <Text size={70}> POVEDI SVOG PRIJATELJA, PARTNERA ILI CIJELU EKIPU</Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
