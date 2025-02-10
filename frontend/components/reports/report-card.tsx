import { Box, Button, Card, Text } from '@redshank/native';

import { Report } from '@/api';
import dayjs from 'dayjs';
import { REPORT_TYPE_MAP_LABEL } from '@/constants/reports/maps';

export function ReportCard({ item }: { item: Report }) {
  const onDownload = () => {};

  const date = dayjs(item?.date);

  return (
    <Card withBorder={false}>
      <Card.Body
        withPadding
        sx={{
          gap: 1,
        }}>
        <Box gap={0.2}>
          <Text bold size="md">
            {item?.name}
          </Text>
          <Box flexDirection="row" gap={1}>
            <Text bold size="xs">
              {REPORT_TYPE_MAP_LABEL[item?.type]}
            </Text>
            <Text bold size="xs">
              -
            </Text>
            <Text size="xs">{date.startOf('month').format('MMMM YYYY')}</Text>
          </Box>
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
            appearance="success"
            onPress={onDownload}>
            Compartir
          </Button>
        </Box>
      </Card.Body>
    </Card>
  );
}
