import { Card, Flex, Group, Image, Text } from '@mantine/core';
import { useStyles } from './styles';
export default function EventCard() {
  const { classes } = useStyles();
  return (
    <Card
      shadow="sm"
      p={20}
      radius="md"
      withBorder
      maw={325}
    >
      <Image
        src="/assets/event-card.png"
        alt="Norway"
        maw={285}
        mah={180}
      />

      <Group
        position="apart"
        mt="md"
        mb="xs"
      >
        <Text
          className={classes.bolderText}
          weight={500}
        >
          03.05
        </Text>
        <Text className={classes.bolderText}>25€</Text>
      </Group>
      <Flex
        gap={10}
        direction="column"
      >
        <Text className={classes.bolderText}>Mrtva Priroda</Text>
        <Text
          className={classes.normaltext}
          size="sm"
          color="dimmed"
        >
          Gunduliceva 32
        </Text>
        <Text
          className={classes.normaltext}
          size="sm"
          color="dimmed"
        >
          Vrijeme : 18:00 - 20:00
        </Text>

        <Flex>
          <Image
            src="/assets/ph_paint-brush-fill.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/ph_paint-brush-fill.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/Shadow_brush.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/Shadow_brush.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/Shadow_brush.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
        </Flex>
        <button className={classes.buyBtn}>KUPI ODMAH</button>
      </Flex>
    </Card>
  );
}
