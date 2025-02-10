import { useState } from 'react';
import { ActivityIndicator, Platform, RefreshControl } from 'react-native';
import {
  Box,
  Button,
  Container,
  Form,
  Icon,
  ScrollView,
  Text,
  useModal,
} from '@redshank/native';
import {
  useGetAllSmallTreasury,
  useGetSmallTreasuryTotal,
} from '@/store/small-treasury';
import { SmallTreasury, Treasury } from '@/api';
import { getColorForAmount } from '@/utils/colors';
import { formatToMoney } from '@/utils/format';
import { EmptyState } from '@/components/EmptyState';
import { SmallTreasuryCard } from '@/components/small-treasury/small-treasury-card';
import { CreateDebit } from '@/components/small-treasury/create-debit';
import { CreateCredit } from '@/components/small-treasury/create-credit';

export default function HomeScreen() {
  const [formDebit] = Form.useForm();
  const [formCredit] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [visible, , actionVisible] = useModal();
  const [visibleCredit, , actionVisibleCredit] = useModal();

  const { data, isLoading, isRefetching, refetch } = useGetAllSmallTreasury();
  const {
    data: balance,
    isLoading: isLoadingBalance,
    isRefetching: isRefetchingBalance,
    refetch: refetchBalance,
  } = useGetSmallTreasuryTotal();

  const onEdit = (item: SmallTreasury) => {
    if (item.direction === SmallTreasury.direction.DEBIT) {
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
            onPress={() => {
              actionVisibleCredit.onVisible();
            }}
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
            <SmallTreasuryCard key={item?.id} item={item} onEdit={onEdit} />
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
