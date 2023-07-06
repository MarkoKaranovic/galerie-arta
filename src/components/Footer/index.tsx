import { Box, Flex, Grid, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
  return (
    <Box
      bg="rgba(8, 68, 83, 1)"
      p="100px 40px"
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          padding: '50px 24px',
        },
      })}
    >
      <Flex
        justify="space-between"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            padding: '0',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
          },
        })}
      >
        <Flex
          gap={15}
          direction="column"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
            },
          })}
        >
          <Text color="white">O NAMA</Text>
          <Text color="white">REZERVIRAJ KARTU</Text>
          <Text color="white">POKOLN BON</Text>
        </Flex>
        <Flex
          gap={15}
          direction="column"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
              padding: '0',
            },
          })}
        >
          <Text color="white">KONTAKT</Text>
          <Text color="white">USLUGE</Text>
          <Text color="white">GALERIJA</Text>
        </Flex>
        <Flex
          gap={156}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              padding: '0',
              justifyContent: 'space-between',
              gap: '0',
            },
          })}
        >
          <Flex
            gap={15}
            direction="column"
          >
            <Text
              color="white"
              size={18}
              fw={600}
            >
              RADNO VRIJEME:
            </Text>
            <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
            <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
            <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
            <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
          </Flex>
          <Flex
            gap={15}
            direction="column"
          >
            <Text
              color="white"
              size={18}
              fw={600}
            >
              INFORMACIJE:
            </Text>
            <Text color="white">
              Gundulićeva 32, <br />
              31000, Osijek <br />
              099 2222 888 <br />
              hello@galeriaarta.com
            </Text>
          </Flex>
        </Flex>
        <Flex justify="center">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11173.759677117765!2d18.661928648430465!3d45.56159133126761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7af30e889cf%3A0x4dbc181b18c449f0!2sOsijek!5e0!3m2!1sen!2shr!4v1683062316283!5m2!1sen!2shr"
            loading="lazy"
            style={{ border: 'none' }}
          ></iframe>
        </Flex>
      </Flex>

      <Grid
        pt={50}
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            display: 'grid',
            padding: '0',
            gridTemplateColumns: '1fr',
            justifyItems: 'center',
          },
        })}
      >
        <Grid.Col span={3}>
          <Flex pt={15}>
            <IconBrandInstagram color="white" />

            <IconBrandFacebook color="white" />
          </Flex>
        </Grid.Col>
        <Grid.Col span={5}>
          <Flex
            justify="space-around"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                display: 'none',
              },
            })}
          >
            <Flex justify="space-around">
              <Text
                color="white"
                size={18}
                fw={600}
              >
                © 2023 GALERIA.ARTA
              </Text>
              <Text
                color="white"
                size={18}
                fw={600}
              >
                OPĆI UVJETI
              </Text>
            </Flex>
            <Text
              color="white"
              size={18}
              fw={600}
            >
              PRAVILA PRIVATNOSTI OSOBNIH PODATAKA
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
