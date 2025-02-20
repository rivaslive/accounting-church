import { create } from 'zustand';
import dayjs from 'dayjs';
import { Report } from '@/api';

export type FilterId = 'treasury' | 'collaborator' | 'reports';

export type Filter = Record<string, any>;

export type FiltersStore = Record<string, any> & {
  onSetFilter: (id: FilterId, filters: Filter) => void;
  onGetFilter: (id: FilterId) => Filter;
  onNextMonth: (id: FilterId) => void;
  onPrevMonth: (id: FilterId) => void;
  date: dayjs.Dayjs;
};

const now = dayjs();

export const createDatesForFilter: (
  date: dayjs.Dayjs,
  key?: string,
) => Filter = (date, key = 'date') => ({
  [key]: {
    $gte: date.startOf('month').toISOString(),
    $lte: date.endOf('month').toISOString(),
  },
});

const defaultValues: Record<FilterId, Filter> = {
  treasury: createDatesForFilter(now),
  collaborator: {},
  reports: {
    ...createDatesForFilter(now),
    state: {
      $eq: Report.state.ACTIVE,
    },
  },
};

export const useFilterStore = create<FiltersStore>((setState, getState) => ({
  ...defaultValues,
  date: now,
  onSetFilter(key, filters) {
    setState({
      [key]: filters,
    });
  },
  onGetFilter(key: string) {
    return getState()?.[key];
  },
  onNextMonth(key) {
    const newDate = getState().date.add(1, 'month');
    setState({ date: newDate, [key]: createDatesForFilter(newDate) });
  },
  onPrevMonth(key) {
    const newDate = getState().date.subtract(1, 'month');
    setState({ date: newDate, [key]: createDatesForFilter(newDate) });
  },
}));
