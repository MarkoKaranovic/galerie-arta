import { Badge, Box, Group, SimpleGrid, Text } from '@mantine/core';
import React from 'react';
import EventCard from '../../components/Card/Event';

export default function Workshops() {
  const [activeFilter, setFilter] = React.useState('vine_art');
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
            variant={activeFilter === 'vine_art' ? 'filled' : 'outline'}
            onClick={() => setFilter('vine_art')}
            style={{ cursor: 'pointer' }}
          >
            Vine & Art
          </Badge>
          <Badge
            color="primary.0"
            size="xl"
            variant={activeFilter === 'keramika' ? 'filled' : 'outline'}
            onClick={() => setFilter('keramika')}
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
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </SimpleGrid>
    </Box>
  );
}
