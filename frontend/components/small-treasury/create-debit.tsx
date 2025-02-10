import {
  BottomSheet,
  Button,
  DatePicker,
  Form,
  Input,
  KeyboardSpace,
  Text,
} from '@redshank/native';
import { useMemo } from 'react';
import type { FormInstance } from 'rc-field-form/es/interface';

import { SmallTreasuryRequest } from '@/api';
import {
  useSaveSmallTreasury,
  useUpdateSmallTreasury,
} from '@/store/small-treasury';

const now = new Date().toISOString();

const defaultValues = {
  date: now,
  amount: '',
  note: '',
  direction: SmallTreasuryRequest.direction.DEBIT,
};

export function CreateDebit({
  visible,
  onClose,
  isEditing,
  form,
}: {
  form: FormInstance;
  visible: boolean;
  onClose: () => void;
  isEditing?: boolean;
}) {
  const { mutateAsync, ...actionsMutation } = useSaveSmallTreasury();
  const { mutateAsync: onUpdateMutation, ...actionsUpdate } =
    useUpdateSmallTreasury();

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

  const onCloseModal = () => {
    form.setFieldsValue(defaultValues);
    onClose();
  };

  const onSubmit = async (values: SmallTreasuryRequest['data']) => {
    values.amount = Number(values.amount);
    if (isEditing) {
      await onUpdateMutation({
        id: form.getFieldValue('id'),
        data: values,
      });
    } else {
      values.direction = SmallTreasuryRequest.direction.DEBIT;
      await mutateAsync(values);
    }
    onCloseModal();
  };

  return (
    <>
      {!visible && <Form form={form} />}
      <BottomSheet visible={visible} onClose={onCloseModal}>
        <Form form={form} onFinish={onSubmit} initialValues={defaultValues}>
          <Form.Item label="Date" name="date" required>
            <DatePicker format="D MMM, YYYY" />
          </Form.Item>

          <Form.Item label="Monto" name="amount" required>
            <Input placeholder="Monto" type="numeric" />
          </Form.Item>

          <Form.Item label="Nota" name="note">
            <Input.TextArea placeholder="Nota" />
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
    </>
  );
}
