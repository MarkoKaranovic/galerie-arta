import { Box, Button, Divider, Flex, Text, TextInput, Textarea } from '@mantine/core';
import React from 'react';

export default function Contact() {
  return (
    <Flex
      bg="#FFFBF5"
      p="60px 155px"
      // gap={120}
      justify="space-between"
    >
      <Box pt={45}>
        <Text
          color="primary.0"
          size="50px"
          fw={700}
          mb={30}
        >
          KONTAKTIRAJTE NAS
        </Text>
        <Divider my="sm" />
        <Flex
          direction="column"
          gap={40}
          mt={50}
        >
          <Flex
            gap={10}
            justify="space-between"
          >
            <TextInput
              placeholder="Tvoje ime"
              label="Ime"
              size="xl"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
              color="primary.0"
            />
            <TextInput
              placeholder="Tvoje prezime"
              label="Prezime"
              size="xl"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
            />
          </Flex>
          <Flex
            gap={10}
            justify="space-between"
          >
            <TextInput
              placeholder="Email"
              label="Email"
              size="xl"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
              color="primary.0"
            />
            <TextInput
              placeholder="Telefon"
              label="Telefon"
              size="xl"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
            />
          </Flex>
          <Textarea
            placeholder="Napiši nešto..."
            label="Poruka"
            size="xl"
            variant="filled"
            labelProps={{ style: { color: 'primary.0' } }}
          />

          <Button
            variant="subtle"
            color="black"
            fullWidth={false}
            maw="40%"
          >
            POŠALJITE NAM UPIT
          </Button>
        </Flex>
      </Box>

      <Flex
        direction="column"
        bg="white"
        p="30px 40px"
        gap={30}
      >
        <Box>
          <Text
            size={50}
            fw={700}
            color="primary.0"
            mb={50}
          >
            JAVITE SE
          </Text>
          <Divider my="sm" />
        </Box>
        <Box>
          <Text
            size={16}
            fw={500}
            color="primary.0"
            mb={50}
          >
            Gundulićeva 32, <br /> 31000 Osijek <br /> 099 8802 436
          </Text>
          <Divider my="sm" />
        </Box>
        <Box>
          <Text
            size={25}
            fw={700}
            color="primary.0"
            mb={50}
          >
            HELLO@GALERIAARTA.COM
          </Text>
          <Divider my="sm" />
        </Box>
        <Box>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11173.759677117765!2d18.661928648430465!3d45.56159133126761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7af30e889cf%3A0x4dbc181b18c449f0!2sOsijek!5e0!3m2!1sen!2shr!4v1683062316283!5m2!1sen!2shr"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 'none' }}
          ></iframe>
        </Box>
      </Flex>
    </Flex>
  );
}
