import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiSdkInstance } from '@/api/instance';
import { GET_REPORT_KEY } from '@/store/reports/keys';
import { useFilterStore } from '@/store/filters';
import { ReportRequest } from '@/api';

export function useGetAllReport() {
  const { onGetFilter } = useFilterStore();
  const reportsFilters = onGetFilter('reports');

  return useQuery({
    queryKey: GET_REPORT_KEY('all', reportsFilters),
    queryFn: () => {
      return apiSdkInstance.report.getReports({
        populate: '*',
        filters: reportsFilters,
      });
    },
  });
}

export function useRequestReport() {
  const cache = useQueryClient();

  return useMutation({
    mutationKey: GET_REPORT_KEY('new'),
    mutationFn: (data: ReportRequest['data']) => {
      return apiSdkInstance.report.postReports({
        requestBody: {
          data,
        },
      });
    },
    onSuccess() {
      cache.invalidateQueries({
        queryKey: GET_REPORT_KEY(),
      });
    },
  });
}
