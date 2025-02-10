import { Report } from '@/api';
import { SelectItemProps } from '@redshank/native';

export const REPORT_TYPE_MAP_LABEL = {
  [Report.type.TREASURY]: 'Caja General',
  [Report.type.SMALL_TREASURY]: 'Caja Chica',
  [Report.type.COLLABORATOR]: 'Miembros',
};

export const REPORT_TYPE_OPTIONS: SelectItemProps[] = [
  {
    key: Report.type.TREASURY,
    value: Report.type.TREASURY,
    label: REPORT_TYPE_MAP_LABEL[Report.type.TREASURY],
  },
  {
    key: Report.type.SMALL_TREASURY,
    value: Report.type.SMALL_TREASURY,
    label: REPORT_TYPE_MAP_LABEL[Report.type.SMALL_TREASURY],
  },
  // {
  //   key: Report.type.COLLABORATOR,
  //   value: Report.type.COLLABORATOR,
  //   label: REPORT_TYPE_MAP_LABEL[Report.type.COLLABORATOR],
  // },
];
