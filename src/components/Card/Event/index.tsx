import { Badge, Card, Flex, Group, Image, Text } from '@mantine/core';
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
      <Card.Section
        ml={0}
        mt={0}
        maw={285}
      >
        <Image
          src="/assets/event-card.png"
          height={160}
          alt="Norway"
          maw={285}
          mah={180}
        />
      </Card.Section>

      <Group
        position="apart"
        mt="md"
        mb="xs"
      >
        <Text weight={500}>03.05</Text>
        <Badge
          color="pink"
          variant="light"
        >
          25$
        </Badge>
      </Group>
      <Flex
        gap={10}
        direction="column"
      >
        <Text
          size="sm"
          color="dimmed"
        >
          Mrtva Priroda
        </Text>
        <Text
          size="sm"
          color="dimmed"
        >
          Gunduliceva 32
        </Text>
        <Text
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
