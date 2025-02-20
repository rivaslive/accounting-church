import dayjs from 'dayjs';
import { Alert } from 'react-native';
import { useMessage } from '@redshank/native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { apiSdkInstance } from '@/api/instance';
import { createDatesForFilter } from '@/store/filters';
import { GET_SMALL_TREASURY_KEY } from '@/store/small-treasury/keys';
import { SmallTreasuryRequest } from '@/api';

const now = dayjs();

export function useGetAllSmallTreasury() {
  return useQuery({
    queryKey: GET_SMALL_TREASURY_KEY('all'),
    queryFn: () => {
      return apiSdkInstance.smallTreasury.getSmallTreasuries({
        paginationPage: 1,
        paginationPageSize: 25,
      });
    },
  });
}

export function useGetSmallTreasuryTotal() {
  const queryBefore = useQuery({
    queryKey: GET_SMALL_TREASURY_KEY('totals'),
    queryFn: async () => {
      const current = await apiSdkInstance.smallBalance.getSmallBalances({
        filters: createDatesForFilter(now, 'month'),
      });
      const before = await apiSdkInstance.smallBalance.getSmallBalances({
        filters: createDatesForFilter(now.subtract(1, 'month'), 'month'),
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

export function useSaveSmallTreasury() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_SMALL_TREASURY_KEY('new'),
    mutationFn: (data: SmallTreasuryRequest['data']) => {
      return apiSdkInstance.smallTreasury.postSmallTreasuries({
        requestBody: {
          data,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_SMALL_TREASURY_KEY(),
      });
    },
  });
}

export function useUpdateSmallTreasury() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_SMALL_TREASURY_KEY('update'),
    mutationFn: (payload: {
      id: number;
      data: Partial<SmallTreasuryRequest['data']>;
    }) => {
      return apiSdkInstance.smallTreasury.putSmallTreasuriesId({
        id: payload.id,
        requestBody: {
          data: payload.data as any,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_SMALL_TREASURY_KEY(),
      });
    },
  });
}

export function useDeleteSmallTreasury(trigger?: () => void) {
  const cache = useQueryClient();
  const messages = useMessage();

  return useMutation({
    mutationKey: GET_SMALL_TREASURY_KEY('delete'),
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
                await apiSdkInstance.smallTreasury.deleteSmallTreasuriesId({
                  id,
                });

                messages.success('Registro eliminado');

                return cache.invalidateQueries({
                  queryKey: GET_SMALL_TREASURY_KEY(),
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
