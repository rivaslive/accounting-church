import { Box, BoxProps, Text } from '@redshank/native';

export function EmptyState(props: Omit<BoxProps, 'children'>) {
  return (
    <Box {...(props as any)} justifyContent="center" alignItems="center">
      <Text>No hay nada que mostrar</Text>
    </Box>
  );
}
