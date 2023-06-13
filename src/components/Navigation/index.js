import { Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import { useStyles } from './styles';
export default function Navigation() {
  const navigate = useNavigate();
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Flex
        bg="#FFFBF5"
        justify="space-between"
        width="100%"
        p="30px 40px"
        // pl="298px"
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
        {/* <Button
          radius={25}
          size="20"
          bg={'#FFFBF5'}
          variant="subtle"
          color="dark"
          onClick={() => navigate('/about')}
        >
          O NAMA
        </Button> */}
        {/* <Button
          radius={25}
          size="20"
          variant="subtle"
          color="dark"
          bg={'#FFFBF5'}
          onClick={() => navigate('/gift')}
        >
          POKOLN BON
        </Button> */}
        {/* <Button
          radius={25}
          size="20"
          variant="subtle"
          color="dark"
          bg={'#FFFBF5'}
          onClick={() => navigate('/gallery')}
        >
          GALERIJA
        </Button>
        <Button
          radius={25}
          size="20"
          variant="subtle"
          color="dark"
          bg={'#FFFBF5'}
          onClick={() => navigate('/service')}
        >
          USLUGA
        </Button>
        <Button
          radius={25}
          size="20"
          variant="subtle"
          color="dark"
          bg={'#FFFBF5'}
          onClick={() => navigate('/contact')}
        >
          KONTAKT
        </Button>
        <Button
          radius={45}
          size="xl"
          bg="primary.0"
          onClick={() => navigate('/reservation')}
        >
          REZERVIRAJ KARTU
        </Button> */}
        <Menu
          opened={opened}
          close={close}
          toggle={toggle}
        />
      </Flex>
    </>
  );
}
