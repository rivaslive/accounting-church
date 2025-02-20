import React, {useMemo, useState} from 'react';
import {ActivityIndicator, Platform, RefreshControl} from 'react-native';
import {useGetAllTreasury, useGetTreasuryTotal} from '@/store/treasury';
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
import {Treasury} from '@/api';
import {TreasuryCard} from '@/components/treasury/treasury-card.tsx';
import {CreateDebit} from '@/components/treasury/create-debit.tsx';
import {CreateCredit} from '@/components/treasury/create-credit.tsx';
import {EmptyState} from '@/components/EmptyState.tsx';
import {formatToDate, formatToMoney} from '@/utils/format.ts';
import {useFilterStore} from '@/store/filters.ts';
import {getColorForAmount} from '@/utils/colors.ts';
import dayjs from 'dayjs';

export default function HomeScreen() {
  const [formDebit] = Form.useForm();
  const [formCredit] = Form.useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [visible, , actionVisible] = useModal();
  const [visibleCredit, , actionVisibleCredit] = useModal();
  const {onNextMonth, onPrevMonth, date} = useFilterStore();

  const {data, isLoading, isRefetching, refetch} = useGetAllTreasury();
  const {
    data: balance,
    isLoading: isLoadingBalance,
    isRefetching: isRefetchingBalance,
    refetch: refetchBalance,
  } = useGetTreasuryTotal();

  const totalMonth = useMemo(() => {
    return data?.data?.reduce?.((acc, item) => {
      if (item.direction === Treasury.direction.CREDIT) {
        return acc - item.amount;
      } else {
        return acc + item.amount;
      }
    }, 0);
  }, [data]);

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
            startContent={
              <Icon
                size={22}
                name="minus-box-outline"
                type="material-design-icons"
              />
            }>
            Agregar Salida
          </Button>
          <Button
            flex={1}
            onPress={actionVisible.onVisible}
            startContent={
              <Icon
                size={22}
                name="plus-box"
                type="material-design-icons"
                color="background"
              />
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

              <Text size="md">{formatToMoney(totalMonth)}</Text>
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
            <Icon size={25} name="chevron-left" type="material-design-icons" />
          </Button>

          <Text bold size="md">
            {formatToDate(date, 'MMM, YYYY')}
          </Text>

          <Button
            onlyIcon
            disabled={date.isAfter(dayjs().subtract(1, 'month'))}
            appearance="card"
            onPress={() => {
              onNextMonth('treasury');
            }}>
            <Icon size={25} name="chevron-right" type="material-design-icons" />
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
        key={`debit-${visible}`}
        form={formDebit}
        visible={visible}
        onClose={onCloseModal}
        isEditing={isEditing}
      />

      <CreateCredit
        key={`credit-${visible}`}
        form={formCredit}
        visible={visibleCredit}
        onClose={onCloseModal}
        isEditing={isEditing}
      />
    </ScrollView>
  );
}
