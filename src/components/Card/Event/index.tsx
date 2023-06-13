import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import React from 'react';

export default function EventCard() {
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
        da
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

      <Text
        size="sm"
        color="dimmed"
      >
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around
        the fjords of Norway
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
      >
        Book classic tour now
      </Button>
    </Card>
  );
}
