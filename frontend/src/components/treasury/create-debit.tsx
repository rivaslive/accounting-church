import {
  BottomSheet,
  Button,
  DatePicker,
  Form,
  Input,
  KeyboardSpace,
  Select,
  Text,
} from '@redshank/native';
import {TREASURY_DEBIT_TYPE_OPTIONS} from '@/constants/treasury/maps';
import {CollaboratorsSelect} from '@/components/collaborators/collaborators-select';
import {useMemo, useState} from 'react';
import {Treasury, TreasuryRequest} from '@/api';
import {useSaveTreasury, useUpdateTreasury} from '@/store/treasury';
import type {FormInstance} from 'rc-field-form/es/interface';
import {useFilterStore} from '@/store/filters.ts';

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
  const {date} = useFilterStore();

  const defaultValues = {
    date: date.toDate(),
    amount: '',
    note: '',
    type: TreasuryRequest.type.WORSHIP,
    direction: TreasuryRequest.direction.DEBIT,
  };

  const [formValues, setFormValues] = useState<Treasury | undefined>(undefined);

  const {mutateAsync, ...actionsMutation} = useSaveTreasury();
  const {mutateAsync: onUpdateMutation, ...actionsUpdate} = useUpdateTreasury();

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

  const onSubmit = async (values: TreasuryRequest['data']) => {
    values.amount = Number(values.amount);
    if (isEditing) {
      await onUpdateMutation({
        id: form.getFieldValue('id'),
        data: values,
      });
    } else {
      values.direction = TreasuryRequest.direction.DEBIT;
      await mutateAsync(values);
    }
    onCloseModal();
  };

  const showCollaboratorSelect = [
    Treasury.type.TITHE,
    Treasury.type.DONATION,
  ].includes(formValues?.type as Treasury.type);

  return (
    <>
      {!visible && <Form form={form} />}
      <BottomSheet visible={visible} onClose={onCloseModal}>
        <Form
          form={form}
          onFinish={onSubmit}
          initialValues={defaultValues}
          onValuesChange={newVal =>
            setFormValues(prev => ({
              ...prev,
              ...newVal,
            }))
          }>
          <Form.Item label="Tipo" name="type" required>
            <Select placeholder="Tipo" items={TREASURY_DEBIT_TYPE_OPTIONS} />
          </Form.Item>
          {showCollaboratorSelect && (
            <Form.Item name="collaborator" label="Diezmador">
              <CollaboratorsSelect />
            </Form.Item>
          )}

          <Form.Item label="Date" name="date" required>
            <DatePicker isDisabled={isEditing} format="D MMM, YYYY" />
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

        {visible && <KeyboardSpace />}
      </BottomSheet>
    </>
  );
}
