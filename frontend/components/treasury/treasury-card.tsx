import { Box, Button, Card, Icon, Text, useTheme } from '@redshank/native';
import { TREASURY_TYPE_MAP_LABEL } from '@/constants/treasury/maps';
import { formatToDate } from '@/utils/format';
import { Treasury } from '@/api';
import { useDeleteTreasury } from '@/store/treasury';
import { getOpacity } from '@redshank/native/dist/utils/colors';
import { useState } from 'react';

export function TreasuryCard({
  item,
  onEdit,
}: {
  item: Treasury;
  onEdit?: (i: Treasury) => void;
}) {
  const [show, setShow] = useState(true);
  const theme = useTheme();
  const { mutateAsync, ...actionsDelete } = useDeleteTreasury(() =>
    setShow(prev => !prev),
  );

  const onDelete = () => {
    item.id && mutateAsync(item.id);
  };

  if (!show) return null;

  return (
    <Card withBorder={false}>
      <Card.Body
        withPadding
        sx={{
          bg: getOpacity(
            theme.colors.get(
              item.direction === Treasury.direction.DEBIT
                ? 'success.dark'
                : 'error.dark',
            ),
            theme.isDark ? 0.05 : 0.2,
          ),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Box gap={0.2}>
          <Text size="lg" bold>
            ${item?.amount}
          </Text>
          <Text bold>
            {item?.type ? TREASURY_TYPE_MAP_LABEL[item?.type] : '-'}
          </Text>
          {item?.collaborator && (
            <Text size="sm">
              {[item?.collaborator?.firstName, item?.collaborator?.lastName]
                .filter(Boolean)
                .join(' ')}
            </Text>
          )}
          <Text size="sm">{formatToDate(item?.date)}</Text>

          {item?.note && (
            <Text size="xs" mt={1}>
              {item?.note}
            </Text>
          )}
        </Box>

        <Box gap={1} flexDirection="row" alignItems="center">
          <Button
            onlyIcon
            size="middle"
            appearance="transparent"
            loading={actionsDelete?.isPending}
            onPress={onDelete}
            startContent={
              <Icon
                size={20}
                color="error"
                type="material-community"
                name="trash-can-outline"
              />
            }
          />
          <Button
            onlyIcon
            size="middle"
            appearance="transparent"
            onPress={() => onEdit?.(item)}
            startContent={
              <Icon name="pencil" size={20} type="material-community" />
            }
          />
        </Box>
      </Card.Body>
    </Card>
  );
}
