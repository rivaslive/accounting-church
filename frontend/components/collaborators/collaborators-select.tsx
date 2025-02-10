import { Select, SelectProps } from '@redshank/native';
import { useGetAllCollaborator } from '@/store/collaborators';

export function CollaboratorsSelect(props: Omit<SelectProps, 'items'>) {
  const { data } = useGetAllCollaborator();
  return (
    <Select
      {...props}
      items={
        data?.data?.map?.(item => ({
          key: item.id,
          value: item.id as unknown as string,
          label: [item.firstName, item.lastName].filter(Boolean).join(' '),
        })) || []
      }
    />
  );
}
