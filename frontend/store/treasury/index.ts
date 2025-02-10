import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiSdkInstance } from '@/api/instance';
import { GET_TREASURY_KEY } from '@/store/treasury/keys';
import { Treasury, TreasuryRequest } from '@/api';
import { useMessage } from '@redshank/native';
import { Alert } from 'react-native';
import dayjs from 'dayjs';
import { createDatesForFilter, useFilterStore } from '@/store/filters';

const now = dayjs();

export function useGetAllTreasury() {
  const { onGetFilter } = useFilterStore();
  const treasuryFilters = onGetFilter('treasury');

  return useQuery({
    queryKey: GET_TREASURY_KEY('all', treasuryFilters),
    queryFn: () => {
      return apiSdkInstance.treasury.getTreasuries({
        populate: '*',
        filters: treasuryFilters,
        paginationWithCount: false,
      });
    },
  });
}

export function useGetTreasuryTotal() {
  const { onGetFilter, date } = useFilterStore();
  const treasuryFilters = onGetFilter('treasury');

  const queryBefore = useQuery({
    queryKey: GET_TREASURY_KEY('totals', date),
    queryFn: async () => {
      const current = await apiSdkInstance.generalBalance.getGeneralBalances({
        filters: createDatesForFilter(date, 'month'),
      });
      const before = await apiSdkInstance.generalBalance.getGeneralBalances({
        filters: createDatesForFilter(date.subtract(1, 'month'), 'month'),
      });

      return {
        current: current?.data?.[0],
        before: before?.data?.[0],
      };
    },
  });

  const totalCurrent = queryBefore?.data?.current?.total ?? 0;
  const totalBefore = queryBefore?.data?.before?.total ?? 0;

  return {
    ...queryBefore,
    data: {
      totalBefore,
      subTotal: totalCurrent,
      total: totalBefore + totalCurrent,
    },
  };
}

export function useSaveTreasury() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_TREASURY_KEY('new'),
    mutationFn: (data: TreasuryRequest['data']) => {
      return apiSdkInstance.treasury.postTreasuries({
        requestBody: {
          data,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_TREASURY_KEY(),
      });
    },
  });
}

export function useUpdateTreasury() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_TREASURY_KEY('update'),
    mutationFn: (payload: {
      id: number;
      data: Partial<TreasuryRequest['data']>;
    }) => {
      return apiSdkInstance.treasury.putTreasuriesId({
        id: payload.id,
        requestBody: {
          data: payload.data as any,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_TREASURY_KEY(),
      });
    },
  });
}

export function useDeleteTreasury(trigger?: () => void) {
  const cache = useQueryClient();
  const messages = useMessage();

  return useMutation({
    mutationKey: GET_TREASURY_KEY('delete'),
    mutationFn: (id: number) => {
      Alert.alert(
        'Eliminar registro',
        'Estas seguro que ¿quieres eliminar este registro?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Eliminar',
            style: 'destructive',
            onPress: async () => {
              try {
                trigger?.();
                await apiSdkInstance.treasury.deleteTreasuriesId({
                  id,
                });

                messages.success('Registro eliminado');

                return cache.invalidateQueries({
                  queryKey: GET_TREASURY_KEY(),
                });
              } catch (error) {
                console.log(error);
                trigger?.();
                messages.error((error as any)?.message);
              }
            },
          },
        ],
        {
          cancelable: true,
        },
      );

      return null as any;
    },
  });
}
