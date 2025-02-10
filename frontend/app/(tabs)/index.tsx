import { useState } from 'react';
import { ActivityIndicator, Platform, RefreshControl } from 'react-native';
import { useGetAllTreasury, useGetTreasuryTotal } from '@/store/treasury';
import {
  Box,
  Container,
  ScrollView,
  Button,
  useModal,
  Form,
  Icon,
  Text,
} from '@redshank/native';
import { Treasury } from '@/api';
import { TreasuryCard } from '@/components/treasury/treasury-card';
import { CreateDebit } from '@/components/treasury/create-debit';
import { CreateCredit } from '@/components/treasury/create-credit';
import { EmptyState } from '@/components/EmptyState';
import { formatToDate, formatToMoney } from '@/utils/format';
import { useFilterStore } from '@/store/filters';
import { getColorForAmount } from '@/utils/colors';

export default function HomeScreen() {
  const [formDebit] = Form.useForm();
  const [formCredit] = Form.useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [visible, , actionVisible] = useModal();
  const [visibleCredit, , actionVisibleCredit] = useModal();
  const { onNextMonth, onPrevMonth, date } = useFilterStore();

  const { data, isLoading, isRefetching, refetch } = useGetAllTreasury();
  const {
    data: balance,
    isLoading: isLoadingBalance,
    isRefetching: isRefetchingBalance,
    refetch: refetchBalance,
  } = useGetTreasuryTotal();

  const onEdit = (item: Treasury) => {
    if (item.direction === Treasury.direction.DEBIT) {
      formDebit.setFieldsValue({
        ...item,
        date: new Date(item.date),
        amount: String(item.amount),
      });
      actionVisible.onVisible();
    } else {
      formCredit.setFieldsValue({
        ...item,
        date: new Date(item.date),
        amount: String(item.amount),
      });
      actionVisibleCredit.onVisible();
    }
    setIsEditing(true);
  };

  const onCloseModal = () => {
    actionVisible.onHidden();
    actionVisibleCredit.onHidden();
    setIsEditing(false);
  };

  const onFullRefetch = () => {
    refetch();
    refetchBalance();
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onFullRefetch}
          refreshing={isRefetching || isRefetchingBalance}
        />
      }>
      <Container pb={15} gap={2}>
        <Box gap={2} flexDirection="row">
          <Button
            flex={1}
            type="outline"
            onPress={actionVisibleCredit.onVisible}
            startContent={<Icon name="minus" type="antdesign" />}>
            Agregar Salida
          </Button>
          <Button
            flex={1}
            onPress={actionVisible.onVisible}
            startContent={
              <Icon name="plus" type="antdesign" color="background" />
            }>
            Agregar Entrada
          </Button>
        </Box>

        <Box bg="card" rounded="card">
          {(isLoadingBalance || isRefetchingBalance) && (
            <Box
              position="absolute"
              top={0}
              left={0}
              rounded="card"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              bg={`rgba(100, 100, 100, .2)`}
              height="100%"
              width="100%">
              <ActivityIndicator
                size={Platform.select({
                  default: 'small',
                })}
              />
            </Box>
          )}
          <Box gap={1} p={2}>
            <Box flexDirection="row" alignItems="center" gap={1}>
              <Text size="md" fontWeight="400">
                Saldo Anterior:
              </Text>

              <Text size="md" color={getColorForAmount(balance?.totalBefore)}>
                {formatToMoney(balance?.totalBefore)}
              </Text>
            </Box>
            <Box flexDirection="row" alignItems="center" gap={1}>
              <Text size="md" fontWeight="400">
                Saldo Neto:
              </Text>

              <Text size="md">{formatToMoney(balance?.total)}</Text>
            </Box>
            <Box flexDirection="row" alignItems="center" gap={1}>
              <Text size="md" fontWeight="400">
                Total en Caja:
              </Text>

              <Text size="md" color={getColorForAmount(balance?.total)}>
                {formatToMoney(balance?.total)}
              </Text>
            </Box>
          </Box>
        </Box>

        {/*<Title level={5}>Transacciones:</Title>*/}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap={2}>
          <Button
            onlyIcon
            appearance="card"
            onPress={() => {
              onPrevMonth('treasury');
            }}>
            <Icon size={20} name="left" type="antdesign" />
          </Button>

          <Text bold size="md">
            {formatToDate(date, 'MMM, YYYY')}
          </Text>

          <Button
            onlyIcon
            appearance="card"
            onPress={() => {
              onNextMonth('treasury');
            }}>
            <Icon size={20} name="right" type="antdesign" />
          </Button>
        </Box>

        <Box gap={2} mt={3}>
          {isLoading ? (
            <ActivityIndicator
              size={Platform.select({
                default: 'small',
              })}
            />
          ) : (
            !data?.data?.length && <EmptyState />
          )}

          {data?.data?.map?.(item => (
            <TreasuryCard key={item?.id} item={item} onEdit={onEdit} />
          ))}
        </Box>
      </Container>

      <CreateDebit
        form={formDebit}
        visible={visible}
        onClose={onCloseModal}
        isEditing={isEditing}
      />

      <CreateCredit
        form={formCredit}
        visible={visibleCredit}
        onClose={onCloseModal}
        isEditing={isEditing}
      />
    </ScrollView>
  );
}
