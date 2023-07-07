import { Card, Flex, Group, Image, Text } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import { useStyles } from './styles';
export default function EventCard({ date, title, price, location, difficulty, eventImage, time }: any) {
  const { classes } = useStyles();
  console.log(dayjs('2023-12-12T00:00:00.000Z').get('month'));

  const dateFormat = React.useMemo(() => {
    const dateObject = dayjs(date);
    return `${dateObject.get('day') + 1}.${dateObject.get('month') + 1}`;
  }, [date]);
  return (
    <Card
      shadow="sm"
      p={20}
      radius="md"
      withBorder
      maw={325}
    >
      <Image
        src={eventImage.url}
        alt="Norway"
        maw={285}
        mah={150}
        height="150px"
        width="250px"
        sx={(theme) => ({
          // figure: { height: '80%' },
          [`@media (min-width: ${theme.breakpoints.mobile})`]: {
            height: '25%!important',
            figure: { height: '70%' },
            img: {
              height: '50px',
            },
          },
        })}
      />

      <Group
        position="apart"
        mt="lg"
        mb="xs"
      >
        <Text
          className={classes.bolderText}
          weight={500}
        >
          {dateFormat}
        </Text>
        <Text className={classes.bolderText}>{price}€</Text>
      </Group>
      <Flex
        gap={10}
        direction="column"
      >
        <Text className={classes.bolderText}>{title}</Text>
        <Text
          className={classes.normaltext}
          size="sm"
          color="dimmed"
        >
          {location}
        </Text>
        <Text
          className={classes.normaltext}
          size="sm"
          color="dimmed"
        >
          {`Vrijeme : ${time}`}
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
