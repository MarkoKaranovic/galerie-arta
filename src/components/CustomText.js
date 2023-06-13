import { Text } from '@mantine/core';
import React from 'react';

export default function CustomText({ color }) {
  return (
    <Text
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0],
        color: theme.colors[color],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
      })}
    >
      CustomText
    </Text>
  );
}
