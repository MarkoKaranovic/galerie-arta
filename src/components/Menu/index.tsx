import { Anchor, Flex, Image, Modal, Text } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Menu({ opened, close }) {
  const navigate = useNavigate();

  const handleClick = React.useCallback(
    (path) => {
      navigate(path);
      close();
    },
    [close, navigate],
  );
  return (
    <Modal.Root
      opened={opened}
      onClose={close}
      fullScreen
      styles={{
        inner: {
          width: '50% !important',
        },
      }}
    >
      <Modal.Overlay />
      <Modal.Content
        bg="#084453"
        h="50%"
      >
        <Modal.Header bg="#084453">
          <Image
            src="/assets/close.svg"
            onClick={close}
            maw={25}
            mah={25}
            pt={46}
            pl={46}
            pb={111}
          />
        </Modal.Header>
        <Modal.Body p={140}>
          <Flex
            direction="column"
            gap={20}
          >
            <Text
              color="white"
              size={50}
              fw={700}
            >
              LINKOVI
            </Text>
            <Flex gap={20}>
              <Flex
                direction="column"
                gap={20}
              >
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('about')}
                >
                  O NAMA
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('reservation')}
                >
                  {' '}
                  REZERVIRAJ
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('gift')}
                >
                  {' '}
                  POKLON BON
                </Anchor>
              </Flex>
              <Flex
                direction="column"
                gap={20}
              >
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('gallery')}
                >
                  GALERIJA
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('service')}
                >
                  USLUGE
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('contact')}
                >
                  KONTAKT
                </Anchor>
              </Flex>
            </Flex>
          </Flex>
          <Flex>{/* <Avatar src="/assets/socials/instagram-small.svg" /> */}</Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
