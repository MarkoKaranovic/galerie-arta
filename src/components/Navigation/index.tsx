import { Burger, Button, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import { useStyles } from './styles';
export default function Navigation() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        className={classes.navigationContainer}
      >
        <Burger
          size="md"
          color="white"
          w="60px"
          h="60px"
          bg="#084453"
          className={classes.burger}
          onClick={open}
          opened={opened}
        />

        <Button
          bg={'#FFFBF5'}
          variant="subtle"
          color="dark"
          ff="Roboto"
          onClick={() => navigate('/about')}
          className={classes.navigationItem}
        >
          O NAMA
        </Button>
        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/gift')}
          className={classes.navigationItem}
        >
          POKOLN BON
        </Button>
        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/gallery')}
          className={classes.navigationItem}
        >
          GALERIJA
        </Button>
        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/service')}
          className={classes.navigationItem}
        >
          USLUGA
        </Button>
        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/contact')}
          className={classes.navigationItem}
        >
          KONTAKT
        </Button>
        <button
          onClick={() => navigate('/reservation')}
          className={classes.navigationItemReservation}
        >
          REZERVIRAJ KARTU
        </button>

        <Menu
          opened={opened}
          close={close}
        />
      </Flex>
    </>
  );
}
