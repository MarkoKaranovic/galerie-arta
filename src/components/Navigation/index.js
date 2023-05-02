import { Burger, Button, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import React from 'react';
import Menu from '../Menu';
import { useStyles } from './styles';
export default function Navigation() {
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <>
      <Flex
        bg="#FFFBF5"
        justify="space-between"
        width="100%"
        p="30px 40px"
      >
        <Burger
          size="md"
          color="white"
          w="60px"
          h="60px"
          bg="#084453"
          className={classes.burger}
          onClick={open}
        />

        <Image
          pos="relative"
          width={100}
          height="100%"
          src="/assets/logo-white.svg"
        />
        <Button
          radius={25}
          size="xl"
          bg="#084453"
        >
          REZERVIRAJ KARTU
        </Button>
      </Flex>
      <Menu
        opened={opened}
        close={close}
        toggle={toggle}
      />
    </>
  );
}
