import { Badge, Box, Group, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import { GetEvents } from '../../Service/Queries';
import EventCard from '../../components/Card/Event';

export default function Workshops() {
  const [activeFilter, setFilter] = React.useState('workshopsEventsCollection');

  const data = GetEvents({ filter: activeFilter }) as any;

  return (
    <Box>
      <Box ta="center">
        <Text
          color="primary.0"
          size="lg"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              fontSize: '36px',
              paddingTop: '100px',
            },
          })}
        >
          IZABERI RADIONICU
        </Text>
        <Group position="center">
          <Badge
            color="primary.0"
            size="xl"
            variant={activeFilter === 'workshopsEventsCollection' ? 'filled' : 'outline'}
            onClick={() => setFilter('workshopsEventsCollection')}
            style={{ cursor: 'pointer' }}
          >
            Vine & Art
          </Badge>
          <Badge
            color="primary.0"
            size="xl"
            variant={activeFilter === 'ceramicsCollection' ? 'filled' : 'outline'}
            onClick={() => setFilter('ceramicsCollection')}
            style={{ cursor: 'pointer' }}
          >
            Keramika
          </Badge>
        </Group>
      </Box>

      <SimpleGrid
        cols={4}
        pt={20}
        pb={20}
        breakpoints={[
          { maxWidth: '62rem', cols: 3, spacing: 'md' },
          { maxWidth: '48rem', cols: 2, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
        style={{ justifyItems: 'center' }}
      >
        {data?.data?.[activeFilter]?.items?.map((event: any) => {
          return <EventCard {...event} />;
        })}
      </SimpleGrid>
    </Box>
  );
}
