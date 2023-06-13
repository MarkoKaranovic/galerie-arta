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
            size="120px"
            fw={700}
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '18px',
              },
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
        sx={() => ({
          '@media (max-width: 400px)': {
            display: 'block',
            padding: '20px 30px',
          },
        })}
        direction="row"
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
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '14px',
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size={18}
            color="white"
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '12px',
              },
            })}
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
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '14px',
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size={18}
            color="white"
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '12px',
              },
            })}
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
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '14px',
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size={18}
            color="white"
            sx={() => ({
              '@media (max-width: 400px)': {
                fontSize: '12px',
              },
            })}
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
        // position="relative"
        sx={() => ({
          '@media (max-width: 400px)': {
            padding: '20px 10px',
          },
        })}
      >
        <Image
          pos="absolute"
          maw={287}
          src="/assets/brushMarker.svg"
          // zIndex={-1}
        />
        <Flex
          pos="relative"
          // zIndex={1}
          p="0 80px"
          gap={86}
          justify="space-between"
          sx={() => ({
            '@media (max-width: 400px)': {
              display: 'block',
              padding: '0 40px',
            },
          })}
        >
          <Flex
            direction="column"
            gap={55}
          >
            <Text
              size={70}
              color="rgba(56, 59, 105, 1)"
              fw={600}
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '30px',
                },
              })}
            >
              POVEDI SVOG <br /> PRIJATELJA, PARTNERA <br /> ILI CIJELU EKIPU
            </Text>
            <Image src="/assets/BiggeSmalls.png" />
          </Flex>
          <Flex
            direction="column"
            gap={100}
            pt={90}
            sx={() => ({
              '@media (max-width: 400px)': {
                paddingTop: '30px',
              },
            })}
          >
            <Text
              size={24}
              color="rgba(56, 59, 105, 1)"
              fw={400}
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '14px',
                },
              })}
            >
              Podigli smo ljestvicu iskustva Galeria <br /> Arta i pozivamo Vas da se pridružite <br /> zabavi. Vino se
              hladi, platno zove, a vibra <br /> je sve samo ne dosadna.
            </Text>
            <Flex
              direction="column"
              gap={50}
              sx={() => ({
                '@media (max-width: 400px)': {
                  gap: '20px',
                },
              })}
            >
              <Image src="/assets/Eye.png" />
              <Text
                size={43}
                color="rgba(56, 59, 105, 1)"
                fw={500}
                sx={() => ({
                  '@media (max-width: 400px)': {
                    fontSize: '18px',
                  },
                })}
              >
                DRUŽIMO SE U ...
              </Text>
              <Text
                size={30}
                color="rgba(56, 59, 105, 1)"
                fw={500}
                underline
                sx={() => ({
                  '@media (max-width: 400px)': {
                    fontSize: '18px',
                  },
                })}
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
        sx={() => ({
          '@media (max-width: 400px)': {
            display: 'block',
          },
        })}
      >
        <Text
          size={70}
          fw={600}
          pl={80}
          color="rgba(56, 59, 105, 1)"
          sx={() => ({
            '@media (max-width: 400px)': {
              fontSize: '28px',
            },
          })}
        >
          Kalendar
        </Text>
        <Flex
          justify="center"
          pt={33}
          pb={200}
          sx={() => ({
            '@media (max-width: 400px)': {
              paddingBottom: '70px',
            },
          })}
        >
          <Carousel
            slideGap="xl"
            controlSize={20}
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
        sx={() => ({
          '@media (max-width: 400px)': {
            padding: '70px 60px',
          },
        })}
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
            sx={() => ({
              '@media (max-width: 400px)': {
                paddingTop: '10px',
              },
            })}
          >
            <Text
              size={50}
              fw={700}
              ff="Teko"
              color="rgba(56, 59, 105, 1)"
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '10px',
                },
              })}
            >
              NEŠTO POSEBNO I ZA <br /> MALENE
            </Text>
            <Text
              size={18}
              fw={400}
              ff="Roboto"
              color="rgba(56, 59, 105, 1)"
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '6px',
                },
              })}
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
          sx={() => ({
            '@media (max-width: 400px)': {
              paddingTop: '50px',
            },
          })}
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
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '10px',
                },
              })}
            >
              #PARTYGOALS
            </Text>
            <Text
              size={60}
              fw={700}
              color="rgba(56, 59, 105, 1)"
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '10px',
                },
              })}
            >
              NEKA BUDE SAMO <br /> NA POZIVNICU
            </Text>
            <Box>
              <Text
                size={18}
                fw={400}
                color="rgba(56, 59, 105, 1)"
                sx={() => ({
                  '@media (max-width: 400px)': {
                    fontSize: '6px',
                  },
                })}
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
                sx={() => ({
                  '@media (max-width: 400px)': {
                    fontSize: '10px',
                  },
                })}
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
          sx={() => ({
            '@media (max-width: 400px)': {
              paddingTop: '50px',
            },
          })}
        >
          <Image
            src="/assets/paintWomen.svg"
            maw={555}
            mah={564}
          />
          <Flex
            direction="column"
            pt={100}
            sx={() => ({
              '@media (max-width: 400px)': {
                paddingTop: '40px',
              },
            })}
          >
            <Text
              color="rgba(56, 59, 105, 1)"
              size={70}
              fw={700}
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '10px',
                },
              })}
            >
              A KERAMIKA?
            </Text>
            <Text
              color="rgba(56, 59, 105, 1)"
              size={18}
              fw={400}
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '6px',
                },
              })}
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
          sx={() => ({
            '@media (max-width: 400px)': {
              paddingTop: '50px',
            },
          })}
        >
          <Flex
            gap={20}
            direction="column"
            pt={100}
            sx={() => ({
              '@media (max-width: 400px)': {
                paddingTop: '40px',
              },
            })}
          >
            <Text
              color="rgba(56, 59, 105, 1)"
              size={70}
              fw={700}
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '10px',
                },
              })}
            >
              POKOLN BON
            </Text>
            <Text
              color="rgba(56, 59, 105, 1)"
              size={18}
              fw={400}
              sx={() => ({
                '@media (max-width: 400px)': {
                  fontSize: '6px',
                },
              })}
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
