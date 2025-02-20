import { Alert } from 'react-native';
import { useMessage } from '@redshank/native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { CollaboratorRequest } from '@/api';
import { apiSdkInstance } from '@/api/instance';
import { GET_COLLABORATOR_KEY } from '@/store/collaborators/keys';

export function useGetAllCollaborator() {
  return useQuery({
    queryKey: GET_COLLABORATOR_KEY('all'),
    queryFn: () => {
      return apiSdkInstance.collaborator.getCollaborators({});
    },
  });
}

export function useSaveCollaborator() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_COLLABORATOR_KEY('new'),
    mutationFn: (data: CollaboratorRequest['data']) => {
      return apiSdkInstance.collaborator.postCollaborators({
        requestBody: {
          data,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_COLLABORATOR_KEY('all'),
      });
    },
  });
}

export function useUpdateCollaborator() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_COLLABORATOR_KEY('update'),
    mutationFn: (payload: {
      id: number;
      data: Partial<CollaboratorRequest['data']>;
    }) => {
      return apiSdkInstance.collaborator.putCollaboratorsId({
        id: payload.id,
        requestBody: {
          data: payload.data as any,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_COLLABORATOR_KEY('all'),
      });
    },
  });
}

export function useDeleteCollaborator() {
  const cache = useQueryClient();
  const messages = useMessage();

  return useMutation({
    mutationKey: GET_COLLABORATOR_KEY('delete'),
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
              await apiSdkInstance.collaborator.deleteCollaboratorsId({
                id,
              });

              return cache.invalidateQueries({
                queryKey: GET_COLLABORATOR_KEY('all'),
              });
            },
          },
        ],
        {
          cancelable: true,
        },
      );

      return null as any;
    },
    onError(error) {
      console.log(error);
      messages.error(error?.message);
    },
  });
}
