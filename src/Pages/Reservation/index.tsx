import { Flex, Grid, Title } from '@mantine/core';
import { Card } from '../../components/Card/index';

export default function Reservation() {
  return (
    <Flex
      p="60px 40px"
      gap={90}
      direction="column"
    >
      <Title
        color="rgba(8, 68, 83, 1)"
        size={50}
        fw={600}
        pl={115}
      >
        Odaberi događaj
      </Title>

      <Grid>
        <Grid.Col span={4}>
          <Card.Event />
        </Grid.Col>
        <Grid.Col span={4}>
          <Card.Event />
        </Grid.Col>
        <Grid.Col span={4}>
          <Card.Event />
        </Grid.Col>
      </Grid>
    </Flex>
  );
}
