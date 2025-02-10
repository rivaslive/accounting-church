import { ActivityIndicator, Platform, RefreshControl } from 'react-native';
import {
  Box,
  Container,
  ScrollView,
  KeyboardSpace,
  Button,
  BottomSheet,
  useModal,
  Form,
  Input,
  DatePicker,
  Select,
} from '@redshank/native';
import { EmptyState } from '@/components/EmptyState';
import { useGetAllReport, useRequestReport } from '@/store/reports';
import { ReportCard } from '@/components/reports/report-card';
import { useFilterStore } from '@/store/filters';
import { ReportRequest } from '@/api';
import { REPORT_TYPE_OPTIONS } from '@/constants/reports/maps';

const now = new Date().toISOString();

export default function HomeScreen() {
  const [form] = Form.useForm();
  const { date } = useFilterStore();
  const [visible, , actionVisible] = useModal();
  const { data, isLoading, isRefetching, refetch } = useGetAllReport();
  const { mutateAsync, ...actionsMutation } = useRequestReport();

  const onCloseModal = () => {
    actionVisible.onHidden();
    form.setFieldsValue(defaultValues);
  };

  const onRequestReport = async (values: ReportRequest['data']) => {
    try {
      await mutateAsync({
        ...values,
        date: date.toISOString(),
      });
    } catch (error) {
      console.error(error);
    }
    onCloseModal();
  };

  const defaultValues = {
    type: REPORT_TYPE_OPTIONS[0].value,
    date: date.startOf('month').toISOString(),
    name: '',
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={refetch}
          refreshing={isRefetching || isLoading}
        />
      }>
      <Container>
        <Box>
          {/*<Box>*/}
          {/*  <Title level={3}>Caja</Title>*/}
          {/*</Box>*/}

          <Button
            onPress={actionVisible.onVisible}
            loading={actionsMutation.isPending}>
            Solicitar Reporte
          </Button>
        </Box>

        <Box mt={2} gap={2}>
          {isLoading && !isRefetching ? (
            <ActivityIndicator
              size={Platform.select({
                default: 'small',
              })}
            />
          ) : (
            !data?.data?.length && <EmptyState />
          )}

          {data?.data?.map?.(item => <ReportCard key={item?.id} item={item} />)}
        </Box>
      </Container>

      <BottomSheet visible={visible} onClose={onCloseModal}>
        <Form
          form={form}
          onFinish={onRequestReport}
          initialValues={defaultValues}>
          <Form.Item name="type">
            <Select placeholder="Tipo de reporte" items={REPORT_TYPE_OPTIONS} />
          </Form.Item>
          <Form.Item name="name">
            <Input placeholder="Nombre del reporte" />
          </Form.Item>
          <Form.Item name="date">
            <DatePicker isDisabled />
          </Form.Item>

          <Form.Item isSubmit>
            <Button mt={5} loading={actionsMutation.isPending}>
              Solicitar Reporte
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              type="outline"
              onPress={onCloseModal}
              disabled={actionsMutation.isPending}>
              Cancelar
            </Button>
          </Form.Item>
        </Form>

        <KeyboardSpace />
      </BottomSheet>
    </ScrollView>
  );
}
