import { BackgroundImage, Container, Flex, Image, Text } from '@mantine/core';

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
        align="center"
      >
        <Text
          size={24}
          fw={400}
          color="primary.0"
        >
          Dajemo vam uvid u djelić atmosfere našeg kreativnog studija. Prepustite se vodstvu naših kreativnih
          instruktora i ne brinite ako vam umjetnost nije jača strana. Stvorit ćete pravo malo remek djelo na koje ćete
          biti ponosni. Neka zabava počne!
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
          color="primary.0"
        >
          UPOZNAJTE NAS
        </Text>
        <Flex
          gap={20}
          justify="center"
          align="center"
        >
          <Image
            src="/assets/Kristina.png"
            maw={440}
            mah={568}
          />
          <Text
            size={24}
            fw={400}
            color="primary.0"
          >
            Upoznajte Kristinu Janković, mag.educ.art. Bogato likovno znanje stekla je pohađajući Školu primijenjene
            umjetnosti i dizajna Osijek, a 2014. upisala je Akademiju za umjetnost i kulturu u Osijeku. Kristinino
            primarno područje interesa je upravo slikarstvo, a njezin uspjeh potvrđuju sudjelovanja na brojnim
            slikarskim izložbama poput pet Završnih izložbi studenata Odsjeka za likovnu umjetnost, samostalne izložbe u
            Gradskoj i sveučilišnoj knjižnici Osijek, grupne izložbe vezane uz projekt Osječke ljetne noći te izložbi
            Plati i nosi u Galeriji Bačva Meštrovićevom paviljonu u Zagrebu. Osim bogatog slikarskog iskustva, Kristinu
            krasi i vještina rada s djecom koju je stekla kroz vođenje brojnih školskih sati likovne kulture.
          </Text>
        </Flex>
      </Flex>

      {/* <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        centered
      >
        {clientSecret && (
          <Elements
            options={options}
            stripe={stripePromise}
          >
            <CheckoutForm />
          </Elements>
        )}
      </Modal> */}
    </Container>
  );
}
