import { Carousel } from '@mantine/carousel';
import { BackgroundImage, Box, Container, Flex, Image, Text } from '@mantine/core';

import React from 'react';
import { useStyles } from './styles';

export default function About() {
  const { classes } = useStyles();

  return (
    <Container
      size="100%"
      p={0}
      bg="#FFFBF5"
    >
      <BackgroundImage
        className={classes.bgImage}
        src="/assets/about.png"
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
          >
            O NAMA
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex
        pt={120}
        pl={155}
        pr={155}
        pb={170}
        gap={20}
      >
        <Text
          size={24}
          fw={400}
          color="#084453"
        >
          Osnovana 2023., Galeria Arta predstavlja malu <br /> oazu umjetničkog stvaralaštva. Presvećena <br />
          stvaranju opuštenog i intimnog iskustva, Galeria <br /> Arta svojim polaznicima otvara vrata u svijet <br />
          umjetnosti. Uz vodstvo stručnih voditelja, polaznici <br /> imaju priliku iskušati vlastite kreativne vještine
          kroz <br /> zabavne radionice, dok oni više naklonjeni <br /> umjetnosti imaju mogućnost stjecanja znanja i
          <br />
          unaprjeđenja vlastitih kreativnih dometa kroz <br /> ponudu individualnih tečajeva i škole slikanja.
        </Text>
        <Image
          src="/assets/glass-wine.png"
          maw={555}
          mah={348}
          w={555}
          mt={20}
        />
      </Flex>
      <Flex
        direction="column"
        gap={70}
        pl={155}
        pr={155}
        pb={122}
        justify="center"
        align="center"
      >
        <Text
          size={70}
          fw={800}
          color="#084453"
        >
          UPOZNAJTE NAS
        </Text>
        <Flex gap={20}>
          <Image
            src="/assets/Kristina.png"
            maw={555}
            mah={348}
            w={555}
          />
          <Text
            size={24}
            fw={400}
            color="#084453"
          >
            Upoznajte Kristinu Janković, mag.educ.art. <br /> <br /> Bogato likovno znanje stekla je pohađajući Školu
            primijenjene <br /> umjetnosti i dizajna Osijek, a 2014. upisala je Akademiju za
            <br /> umjetnost i kulturu u Osijeku. Kristinino primarno područje <br /> interesa je upravo slikarstvo, a
            njezin uspjeh potvrđuju <br /> sudjelovanja na brojnim slikarskim izložbama poput pet <br /> Završnih
            izložbi studenata Odsjeka za likovnu umjetnost, samostalne izložbe u Gradskoj i sveučilišnoj knjižnici
            Osijek, <br /> grupne izložbe vezane uz projekt Osječke ljetne noći te izložbi Plati i nosi u Galeriji Bačva
            Meštrovićevom paviljonu u Zagrebu. Osim bogatog slikarskog iskustva,
            <br />
            <br />
            Kristinu krasi i vještina rada s djecom koju je stekla kroz vođenje brojnih školskih sati likovne kulture.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
