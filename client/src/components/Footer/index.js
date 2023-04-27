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
      </Flex>
      <Flex></Flex>
    </Box>
  );
}
