import { Carousel } from '@mantine/carousel';
import { BackgroundImage, Box, Container, Flex, Image, Text } from '@mantine/core';

import React from 'react';
import { useStyles } from './styles';

export default function Main() {
  const { classes } = useStyles();

  return (
    <Container
      size="100%"
      p={0}
    >
      <BackgroundImage
        className={classes.bgImage}
        src="/assets/logo.png"
        mah={700}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="100%"
        >
          <Text
            color="white"
            // size="120px"
            fw={700}
            sx={() => ({
              fontSize: '10vw',
              // '@media (max-width: 1245px)': {
              //   fontSize: '104px',
              // },
            })}
          >
            ISKUSI ZABAVU, <br /> OKUSI UŽITAK
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex
        bg="primary.0"
        p="135px 118px"
        justify="space-between"
      >
        <Flex
          direction="column"
          gap={50}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />
          <Text
            size={24}
            color="white"
            ff="Teko"
            fw={600}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size={18}
            color="white"
          >
            Kist u jednoj ruci, čaša u drugoj... <br /> Dopustite da vas ponese zabavna i <br />
            kreativna atmosfera za stvaranje <br />
            slike.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={50}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />
          <Text
            size={24}
            color="white"
            ff="Teko"
            fw={600}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size={18}
            color="white"
          >
            Kist u jednoj ruci, čaša u drugoj... <br /> Dopustite da vas ponese zabavna i <br />
            kreativna atmosfera za stvaranje <br />
            slike.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={50}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />
          <Text
            size={24}
            color="white"
            ff="Teko"
            fw={600}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size={18}
            color="white"
          >
            Kist u jednoj ruci, čaša u drugoj... <br /> Dopustite da vas ponese zabavna i <br />
            kreativna atmosfera za stvaranje <br />
            slike.
          </Text>
        </Flex>
      </Flex>

      <Box
        p="61px 40px"
        bg="#FFFBF5"
        position="relative"
      >
        <Image
          pos="absolute"
          maw={287}
          src="/assets/brushMarker.svg"
          zIndex={-1}
        />
        <Flex
          pos="relative"
          zIndex={1}
          p="0 80px"
          gap={86}
          justify="space-between"
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
            pt={90}
          >
            <Text
              size={24}
              color="rgba(56, 59, 105, 1)"
              fw={400}
            >
              Podigli smo ljestvicu iskustva Galeria <br /> Arta i pozivamo Vas da se pridružite <br /> zabavi. Vino se
              hladi, platno zove, a vibra <br /> je sve samo ne dosadna.
            </Text>
            <Flex
              direction="column"
              gap={50}
            >
              <Image src="/assets/Eye.png" />
              <Text
                size={43}
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
      <Flex
        pl={40}
        pr={75}
        direction="column"
        bg="#FFFBF5"
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
        bg="#FFFBF5"
      >
        <Flex
          gap={20}
          justify="space-between"
        >
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
          justify="space-between"
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
          justify="space-between"
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
        <Flex
          pt={200}
          gap={20}
          justify="space-between"
        >
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
    </Container>
  );
}
