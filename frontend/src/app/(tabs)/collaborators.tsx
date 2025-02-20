import { useMemo, useState } from 'react';
import { ActivityIndicator, Platform, RefreshControl } from 'react-native';
import {
  Box,
  Container,
  ScrollView,
  KeyboardSpace,
  Text,
  Button,
  BottomSheet,
  useModal,
  Form,
  Input,
} from '@redshank/native';
import { Collaborator, CollaboratorRequest, TreasuryRequest } from '@/api';
import { CollaboratorCard } from '@/components/collaborators/collaborator-card.tsx';
import {
  useGetAllCollaborator,
  useSaveCollaborator,
  useUpdateCollaborator,
} from '@/store/collaborators';
import { EmptyState } from '@/components/EmptyState.tsx';

const now = new Date().toISOString();

const defaultValues = {
  date: now,
  type: TreasuryRequest.type.WORSHIP,
  direction: TreasuryRequest.direction.DEBIT,
};

export default function HomeScreen() {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [visible, , actionVisible] = useModal();
  const { data, isLoading, isRefetching, refetch } = useGetAllCollaborator();
  const { mutateAsync, ...actionsMutation } = useSaveCollaborator();
  const { mutateAsync: onUpdateMutation, ...actionsUpdate } =
    useUpdateCollaborator();

  const errorText = useMemo(() => {
    if (isEditing && actionsUpdate?.error) {
      return (
        actionsUpdate.error as any
      )?.body?.error?.details?.errors?.reduce?.((acc: string, current: any) => {
        return acc + current?.message + '\n';
      }, '');
    }
    if (actionsMutation.error) {
      return (
        actionsMutation.error as any
      )?.body?.error?.details?.errors?.reduce?.((acc: string, current: any) => {
        return acc + current?.message + '\n';
      }, '');
    }
    return null;
  }, [actionsMutation, actionsUpdate, isEditing]);

  const onEdit = (item: Collaborator) => {
    actionVisible.onVisible();
    form.setFieldsValue(item);
    setIsEditing(true);
  };

  const onCloseModal = () => {
    actionVisible.onHidden();
    form.setFieldsValue(defaultValues);
    setIsEditing(false);
  };

  const onSubmit = async (values: CollaboratorRequest['data']) => {
    if (isEditing) {
      await onUpdateMutation({
        id: form.getFieldValue('id'),
        data: values,
      });
    } else {
      await mutateAsync(values);
    }
    onCloseModal();
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

          <Button onPress={actionVisible.onVisible}>Añadir Diezmador</Button>
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

          {data?.data?.map?.(item => (
            <CollaboratorCard key={item?.id} item={item} onEdit={onEdit} />
          ))}
        </Box>

        <BottomSheet visible={visible} onClose={onCloseModal}>
          <Form form={form} onFinish={onSubmit} initialValues={defaultValues}>
            <Form.Item label="Nombres" name="firstName" required>
              <Input placeholder="Nombres" />
            </Form.Item>

            <Form.Item label="Apellidos" name="lastName">
              <Input placeholder="Apellidos (Opcional)" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input placeholder="Email (Opcional)" type="email-address" />
            </Form.Item>

            <Form.Item label="Telefono" name="phone">
              <Input placeholder="Telefono (Opcional)" />
            </Form.Item>

            {!!errorText && (
              <Text color="error.main" size="xs">
                {errorText}
              </Text>
            )}

            <Form.Item isSubmit>
              <Button
                mt={5}
                loading={actionsMutation.isPending || actionsUpdate.isPending}>
                {isEditing ? 'Actualizar' : 'Guardar'}
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="outline"
                onPress={onCloseModal}
                disabled={actionsMutation.isPending || actionsUpdate.isPending}>
                Cancelar
              </Button>
            </Form.Item>
          </Form>

          <KeyboardSpace />
        </BottomSheet>
      </Container>
    </ScrollView>
  );
}
