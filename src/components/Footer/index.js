import { Box, Flex, Text } from '@mantine/core';
import React from 'react';

export default function Footer() {
  return (
    <Box
      bg="rgba(8, 68, 83, 1)"
      p="100px 40px"
    >
      <Flex justify="space-between">
        <Flex
          gap={15}
          direction="column"
        >
          <Text color="white">O NAMA</Text>
          <Text color="white">REZERVIRAJ KARTU</Text>
          <Text color="white">POKOLN BON</Text>
        </Flex>
        <Flex
          gap={15}
          direction="column"
        >
          <Text color="white">KONTAKT</Text>
          <Text color="white">USLUGE</Text>
          <Text color="white">GALERIJA</Text>
        </Flex>
        <Flex
          gap={15}
          direction="column"
        >
          <Text color="white">RADNO VRIJEME</Text>
          <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
          <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
          <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
          <Text color="white">UTO - SRI: 13:00 - 21:00</Text>
        </Flex>
        <Flex
          gap={15}
          direction="column"
        >
          <Text color="white">INFORMACIJE</Text>
          <Text color="white">
            Gundulićeva 32, <br />
            31000, Osijek <br />
            099 2222 888 <br />
            hello@galeriaarta.com
          </Text>
        </Flex>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11173.759677117765!2d18.661928648430465!3d45.56159133126761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7af30e889cf%3A0x4dbc181b18c449f0!2sOsijek!5e0!3m2!1sen!2shr!4v1683062316283!5m2!1sen!2shr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Flex>

      <Flex></Flex>
    </Box>
  );
}
