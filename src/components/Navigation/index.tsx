import { Button, Flex } from '@mantine/core';

import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <>
      <Flex
        bg="#FFFBF5"
        justify="space-between"
        p="30px 40px"
        pl="298px"
      >
        <Button
          radius={25}
          size="20"
          bg={'#FFFBF5'}
          variant="subtle"
          color="dark"
          onClick={() => navigate('/about')}
        >
          O NAMA
        </Button>
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
        <Button
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
        </Button>
      </Flex>
    </>
  );
}
