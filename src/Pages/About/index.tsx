import { Container, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../../components/Checkout/CheckoutForm';
import { useStyles } from './styles';

const stripePromise = loadStripe(
  'pk_test_51N1TeEKR78E7bO3JS8a2pJbSFK4aYrG5SN956FlFwsnhlrXTLziTeUMlmwUl3D33PjPctRfX4zGuP5UqwRNwvRtb00YwUpTBDk',
);

export default function About() {
  const [opened, { open, close }] = useDisclosure(true);
  const { classes } = useStyles();
  const [clientSecret, setClientSecret] = React.useState('');

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const appearance = {
    theme: 'stripe',
  };
  const options: any = {
    clientSecret,
    appearance,
  };
  return (
    <Container
      size="100%"
      p={0}
      bg="#FFFBF5"
    >
      {/* {clientSecret && (
        <Elements
          options={options}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )} */}
      {/* <BackgroundImage
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
          Dajemo vam uvid u djelić atmosfere našeg <br /> kreativnog studija. Prepustite se vodstvu naših kreativnih
          instruktora i ne brinite ako vam umjetnost <br /> nije jača strana. Stvorit ćete pravo malo remek djelo na
          koje ćete biti ponosni. Neka zabava počne!
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
            color="primary.0"
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
      </Flex> */}

      <Modal
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
      </Modal>
    </Container>
  );
}
