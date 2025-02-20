import { Box, Button, Card, Text } from '@redshank/native';

import { Collaborator } from '@/api';
import { formatToDate } from '@/utils/format';
import { useDeleteCollaborator } from '@/store/collaborators';

export function CollaboratorCard({
  item,
  onEdit,
}: {
  item: Collaborator;
  onEdit?: (i: Collaborator) => void;
}) {
  const { mutateAsync: onDelete, ...actionsDelete } = useDeleteCollaborator();

  return (
    <Card withBorder={false}>
      <Card.Body
        withPadding
        sx={{
          gap: 1,
        }}>
        <Box gap={0.2}>
          <Text bold>
            {[item?.firstName, item?.lastName].filter(Boolean).join(' ')}
          </Text>
          <Text size="xs">{formatToDate(item.createdAt)}</Text>
        </Box>

        <Box
          mt={1}
          gap={2}
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-start">
          <Button
            size="small"
            type="outline"
            appearance="error.main"
            loading={actionsDelete?.isPending}
            onPress={() => {
              item.id && onDelete(item.id);
            }}>
            Eliminar
          </Button>

          <Button type="outline" size="small" onPress={() => onEdit?.(item)}>
            Editar
          </Button>
        </Box>
      </Card.Body>
    </Card>
  );
}
