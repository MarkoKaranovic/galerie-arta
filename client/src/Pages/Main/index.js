import { Carousel } from '@mantine/carousel';
import { BackgroundImage, Box, Burger, Button, Container, Flex, Image, Text } from '@mantine/core';

import React from 'react';
import Footer from '../../components/Footer';
import { useStyles } from './styles';

export default function Main() {
  const { classes } = useStyles();

  return (
    <Container
      size="100%"
      style={{
        overflow: 'hidden',
        padding: 0,
        maxWidth: 1440,
        border: '1px solid red',
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
        p="135px 118px"
        justify="space-between"
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
            Kist u jednoj ruci, čaša u drugoj... <br /> Dopustite da vas ponese zabavna i <br />
            kreativna atmosfera za stvaranje <br />
            slike.
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
            Znate samo obojiti svoje zidove, pa
            <br />
            čak i tada… Bez panike! Umjetnik će
            <br /> vas voditi korak po korak kako biste
            <br />
            probudili svoju kreativnost
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
            Podijelite nezaboravno iskustvo s <br /> prijateljima, upoznajte nove ljude i <br />
            otiđite s vlastitom slikom!
          </Text>
        </Flex>
      </Flex>

      <Flex p="61px 40px">
        <Box position="relative">
          <Image
            pos="absolute"
            maw={287}
            src="/assets/brushMarker.svg"
            zIndex={-1}
          />
          <Image
            pos="absolute"
            src="/assets/brownMark.png"
            maw={200}
            mah={303}
            zIndex={-1}
            right={0}
            mb={101}
          />
          <Flex
            pos="relative"
            zIndex={1}
            p="0 80px"
            gap={86}
          >
            <Flex
              direction="column"
              gap={55}
            >
              <Text
                size={70}
                color="rgba(56, 59, 105, 1)"
                fw={600}
              >
                POVEDI SVOG <br /> PRIJATELJA, PARTNERA <br /> ILI CIJELU EKIPU
              </Text>
              <Image src="/assets/BiggeSmalls.png" />
            </Flex>
            <Flex
              direction="column"
              gap={100}
            >
              <Text
                size={24}
                color="rgba(56, 59, 105, 1)"
                fw={400}
              >
                Podigli smo ljestvicu iskustva Galeria <br /> Arta i pozivamo Vas da se pridružite <br /> zabavi. Vino
                se hladi, platno zove, a vibra <br /> je sve samo ne dosadna.
              </Text>
              <Flex
                direction="column"
                gap={50}
              >
                <Image src="/assets/Eye.png" />
                <Text
                  size={63}
                  color="rgba(56, 59, 105, 1)"
                  fw={500}
                >
                  DRUŽIMO SE U ...
                </Text>
                <Text
                  size={30}
                  color="rgba(56, 59, 105, 1)"
                  fw={500}
                  underline
                >
                  Osijeku
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Flex
        pl={40}
        pr={75}
        direction="column"
      >
        <Text
          size={70}
          fw={600}
          pl={80}
          color="rgba(56, 59, 105, 1)"
        >
          Kalendar
        </Text>
        <Flex
          justify="center"
          pt={33}
          pb={200}
        >
          <Carousel
            slideGap="xl"
            controlSize={50}
            draggable
            loop
            align="center"
            nextControlIcon={
              <Image
                src="/assets/RightArrow.svg"
                maw={23}
                mah={40}
              />
            }
            previousControlIcon={
              <Image
                src="/assets/LeftArrow.svg"
                maw={23}
                mah={40}
              />
            }
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
      </Flex>
      <Box
        pl={155}
        pr={155}
      >
        <Flex gap={20}>
          <Image
            src="/assets/Painting.svg"
            maw={555}
            mah={564}
          />
          <Flex
            direction="column"
            gap={20}
            pt={100}
          >
            <Text
              size={50}
              fw={700}
              ff="Teko"
              color="rgba(56, 59, 105, 1)"
            >
              NEŠTO POSEBNO I ZA <br /> MALENE
            </Text>
            <Text
              size={18}
              fw={400}
              ff="Roboto"
              color="rgba(56, 59, 105, 1)"
            >
              Naše likovne radionice su puno više od ubičnih umjetničkih lekcija - <br /> ovdje se vaša djeca mogu
              izraziti, istražiti svoju kreativnost i pronaći <br /> nove prijatelje. Naši iskusni instruktori vodit će
              ih kroz sve korake <br /> stvaranja, od ideje do konačnog djela.
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap={20}
          pt={150}
        >
          <Flex
            direction="column"
            gap={20}
            pt={100}
          >
            <Text
              color="rgba(8, 68, 83, 1) "
              size={24}
              fw={700}
            >
              #PARTYGOALS
            </Text>
            <Text
              size={60}
              fw={700}
              color="rgba(56, 59, 105, 1)"
            >
              NEKA BUDE SAMO <br /> NA POZIVNICU
            </Text>
            <Box>
              <Text
                size={18}
                fw={400}
                color="rgba(56, 59, 105, 1)"
              >
                Znamo kako organizirati zabavu, pa zašto nam ne biste dopustili da <br /> organiziramo vašu? Zauzmite
                cijeli atelje, odaberite tematsku sliku <br />
                za svoje goste i prepustite se jednom od naših likovnih instruktora da <br />
                vas vodi do dobrog provoda.
              </Text>
              <Text
                mt={30}
                underline
                size={20}
                fw={500}
                color="rgba(56, 59, 105, 1)"
              >
                Planirajte zabavu
              </Text>
            </Box>
          </Flex>
          <Image
            src="/assets/cake.svg"
            maw={555}
            mah={564}
          />
        </Flex>
        <Flex
          pt={200}
          gap={20}
        >
          <Image
            src="/assets/paintWomen.svg"
            maw={555}
            mah={564}
          />
          <Flex
            direction="column"
            pt={100}
          >
            <Text
              color="rgba(56, 59, 105, 1)"
              size={70}
              fw={700}
            >
              A KERAMIKA?
            </Text>
            <Text
              color="rgba(56, 59, 105, 1)"
              size={18}
              fw={400}
            >
              Na našim keramičkim radionicama ćete pronaći sve što vam treba <br /> za stvaranje unikatnih umjetničkih
              djela od gline. Uz mnošto <br /> zabavnih aktivnosti, tehnika i tečajeva, naša keramička radionica <br />{' '}
              nudi nezaboravno iskustvo za sve uzraste. Dođite i stvorite nešto <br /> posebno - vaša kreativnost ne
              poznaje granice!
            </Text>
          </Flex>
        </Flex>
        <Flex pt={200}>
          <Flex
            gap={20}
            direction="column"
            pt={100}
          >
            <Text
              color="rgba(56, 59, 105, 1)"
              size={70}
              fw={700}
            >
              POKOLN BON
            </Text>
            <Text
              color="rgba(56, 59, 105, 1)"
              size={18}
              fw={400}
            >
              Iznenadite svoje najmilije posebnim poklonom, <br /> odaberite neku od naših usluga i razveselite <br />{' '}
              dragu osobu.
            </Text>
          </Flex>
          <Image
            src="/assets/giftCard.svg"
            maw={666}
            mah={472}
          />
        </Flex>
      </Box>
      <Footer />
    </Container>
  );
}
