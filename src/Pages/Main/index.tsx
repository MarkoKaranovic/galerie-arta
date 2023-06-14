import { BackgroundImage, Box, Container, Flex, Image, Text } from '@mantine/core';

import TestimonialSlider from '../../components/Slider';
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
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.sm,
              },
            })}
          >
            ISKUSI ZABAVU I UŽITAK
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex
        p="135px 118px"
        justify="space-between"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            display: 'block',
            padding: '0',
          },
        })}
        direction="row"
      >
        <Flex
          direction="column"
          gap={50}
          justify="center"
          align="center"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              gap: '20px',
              background: theme.colors.primary[0],
              padding: '20px',
            },
          })}
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />
          <Text
            size="s"
            color="white"
            ff="Teko"
            fw={600}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.xs,
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size="xs"
            color="white"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.xxs,
                textAlign: 'center',
              },
            })}
          >
            Ne morate ponijeti ništa. Samo se pojavite spremni za zabavu, a mi ćemo se pobrinut za ostalo.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={50}
          justify="center"
          align="center"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              gap: '20px',
              background: 'white',
              padding: '20px',
            },
          })}
        >
          <Image
            src="/assets/glasses.png"
            maw={137}
            h={120}
          />
          <Text
            size="s"
            color="white"
            ff="Teko"
            fw={600}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.xs,
                color: 'black',
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size="xs"
            color="white"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.xxs,
                textAlign: 'center',
                color: 'black',
                fontWeight: 500,
              },
            })}
          >
            Uz čašu vina, sve je lakše pa tako i potezi kistom. Opustite se uz izbor vina odabaranih slavonskih vinarija
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={50}
          justify="center"
          align="center"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              gap: '20px',
              background: theme.colors.primary[0],
              padding: '20px',
            },
          })}
        >
          <Image
            src="/assets/paintPicture.png"
            maw={137}
            h={120}
          />
          <Text
            size="s"
            color="white"
            ff="Teko"
            fw={600}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.xs,
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size="xs"
            color="white"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: theme.fontSizes.xxs,
                textAlign: 'center',
                fontWeight: 500,
              },
            })}
          >
            Slikarsko iskustvo nije potrebno. Oslobodite svog unutarnjeg Van Gogha i zabavite se u ugodnoj atmosferi
            našeg studija.
          </Text>
        </Flex>
      </Flex>

      <Box
        p="61px 40px"
        bg="#FFFBF5"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            padding: '20px 0 0 0px',
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
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'block',
              padding: '90px 0px 0px 0px',
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
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: theme.fontSizes.s,
                  textAlign: 'center',
                  fontFamily: 'Teko',
                },
              })}
            >
              POVEDI SVOG PRIJATELJA, PARTNERA ILI CIJELU EKIPU
            </Text>
            <Image src="/assets/BiggeSmalls.png" />
          </Flex>
          <Flex
            direction="column"
            gap={100}
            pt={90}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                paddingTop: '0',
                gap: '10px',
              },
            })}
          >
            <Text
              size="s"
              color="rgba(56, 59, 105, 1)"
              fw={400}
              ff="Roboto"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: theme.fontSizes.xxs,
                  textAlign: 'center',
                  color: 'black',
                  padding: '20px 24px',
                  fontWeight: 500,
                },
              })}
            >
              Podigli smo ljestvicu iskustva u Galerii Arti i pozivamo Vas da se pridružite zabavi. Vino se hladi,
              platno zove, a vibra je sve samo ne dosadna.
            </Text>
            <Flex
              direction="column"
              gap={50}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  gap: '20px',
                },
              })}
            >
              <Image src="/assets/Eye.png" />
              <Text
                size={43}
                color="rgba(56, 59, 105, 1)"
                fw={500}
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                    fontSize: '18px',
                    display: 'none',
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
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                    fontSize: '18px',
                    display: 'none',
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
        bg="#D9D9D9"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            display: 'block',
            padding: '0px 24px ',
          },
        })}
      >
        <Text
          size={70}
          fw={600}
          pl={80}
          color="rgba(56, 59, 105, 1)"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              fontSize: theme.fontSizes.sm,
              paddingLeft: 0,
              paddingTop: '40px',
              textTransform: 'uppercase',
              color: theme.colors.primary[0],
            },
          })}
        >
          Kalendar
        </Text>
        <Flex
          justify="center"
          pt={33}
          pb={200}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              paddingBottom: '0',
            },
          })}
        >
          <TestimonialSlider />
        </Flex>
      </Flex>
      <Box
        pl={155}
        pr={155}
        bg="#FFFBF5"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            padding: 0,
          },
        })}
      >
        <Flex
          gap={20}
          justify="space-between"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'block',
              position: 'relative',
            },
          })}
        >
          <Image
            src="/assets/Painting.svg"
            maw={555}
            mah={564}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                position: 'absolute',
                maxHeight: '432px',
                isolation: 'isolate',
                filter: 'blur(1px)',
                '& img': {
                  height: '432px !important',
                },
              },
            })}
          />
          <Flex
            direction="column"
            gap={20}
            pt={100}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                padding: '50px 24px',
                gap: '50px',
              },
            })}
          >
            <Text
              size={50}
              fw={700}
              ff="Teko"
              color="rgba(56, 59, 105, 1)"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: theme.fontSizes.sm,
                  zIndex: 1,
                  textAlign: 'center',
                },
              })}
            >
              NEŠTO POSEBNO I ZA MALENE
            </Text>
            <Text
              size={18}
              fw={400}
              ff="Roboto"
              color="rgba(56, 59, 105, 1)"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '16px',
                  zIndex: 1,
                  textAlign: 'center',
                  color: 'white',
                },
              })}
            >
              Naše likovne radionice su puno više od običnih umjetničkih lekcija - ovdje se vaša djeca mogu iraziti,
              istražiti svoju kreativnost i pronaći nove prrijatelje. Naši iskusni instruktroi vodit će ih kroz sve
              korake stvaranja, od ideje do konačnog djela.
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap={20}
          pt={150}
          justify="space-between"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'block',
              position: 'relative',
              padding: 0,
            },
          })}
        >
          <Flex
            direction="column"
            gap={20}
            pt={100}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                padding: '50px 24px',
                gap: '50px',
              },
            })}
          >
            <Text
              color="rgba(8, 68, 83, 1) "
              size="s"
              fw={700}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '16px',
                  position: 'relative',
                  zIndex: 1,
                },
              })}
            >
              #PARTYGOALS
            </Text>
            <Text
              size={60}
              fw={700}
              color="primary.0"
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '36px',
                  textAlign: 'center',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                },
              })}
            >
              NEKA BUDE SAMO NA POZIVNICU
            </Text>
            <Box>
              <Text
                size={18}
                fw={400}
                ff="Roboto"
                color="rgba(56, 59, 105, 1)"
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                    fontSize: '16px',
                    textAlign: 'center',
                    fontWeight: 500,
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                  },
                })}
              >
                Znamo kako organizirati zabavu, pa zašto nam ne biste dopustili da organiziramo vašu? Zauzmite cijeli
                atelje, odaberite tematsku sliku za svoje goste i prepustite se jednom od naših likovnih instruktora da
                vas vodi do dobrog provoda.
              </Text>
              <Text
                mt={30}
                underline
                size={20}
                fw={500}
                color="rgba(56, 59, 105, 1)"
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                    fontSize: '10px',
                    display: 'none',
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
            alt="With default placeholder"
            withPlaceholder
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                position: 'absolute',
                top: 0,
                '& img': {
                  height: '455px !important',
                },
                filter: 'blur(1px)',
              },
            })}
          />
        </Flex>

        <Flex
          pt={200}
          gap={20}
          justify="space-between"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'block',
              position: 'relative',
              padding: 0,
            },
          })}
        >
          <Image
            src="/assets/paintWomen.svg"
            maw={555}
            mah={564}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                position: 'absolute',
                maxHeight: '372px',
                isolation: 'isolate',
                filter: 'blur(1px)',
                '& img': {
                  height: '372px !important',
                },
              },
            })}
          />
          <Flex
            direction="column"
            pt={100}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                padding: '50px 24px',
                gap: '50px',
              },
            })}
          >
            <Text
              color="primary.0"
              size={70}
              fw={700}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '36px',
                  textAlign: 'center',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                },
              })}
            >
              A KERAMIKA?
            </Text>
            <Text
              color="rgba(56, 59, 105, 1)"
              size={18}
              fw={400}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '16px',
                  textAlign: 'center',
                  fontWeight: 500,
                  position: 'relative',
                  zIndex: 1,
                  color: 'white',
                },
              })}
            >
              Na našim keramičkim radionicama ćete pronaći sve što vam treba za stvaranje unikatnih umjetničkih djela od
              gline. Uz mnošto zabavnih aktivnosti, tehnika i tečajeva, naša keramička radionica nudi nezaboravno
              iskustvo za sve uzraste. Dođite i stvorite nešto posebno - vaša kreativnost ne poznaje granice!
            </Text>
          </Flex>
        </Flex>
        <Flex
          pt={200}
          gap={20}
          justify="space-between"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'block',
              position: 'relative',
              padding: 0,
            },
          })}
        >
          <Flex
            gap={20}
            direction="column"
            pt={100}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                padding: '50px 24px',
                gap: 30,
              },
            })}
          >
            <Text
              color="primary.0"
              size={70}
              fw={700}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '36px',
                  fontWeight: 600,
                },
              })}
            >
              POKOLN BON
            </Text>
            <Text
              color="rgba(56, 59, 105, 1)"
              size={18}
              fw={400}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '16px',
                  textAlign: 'center',
                  fontWeight: 600,
                },
              })}
            >
              Iznenadite svoje najmilije posebnim poklonom, odaberite neku od naših usluga i razveselite dragu osobu.
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
