import { Grid } from '@mantine/core';
import EventCard from '../../components/Card/Event';

export default function Workshops() {
  return (
    <Grid style={{ paddingTop: '200px' }}>
      <Grid.Col span={3}>
        <EventCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <EventCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <EventCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <EventCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <EventCard />
      </Grid.Col>
      <Grid.Col span={3}>
        <EventCard />
      </Grid.Col>
    </Grid>
  );
}
