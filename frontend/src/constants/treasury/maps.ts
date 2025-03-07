import { Treasury } from '@/api';
import { SelectItemProps } from '@redshank/native';

export const TREASURY_TYPE_MAP_LABEL = {
  [Treasury.type.WORSHIP]: 'Ofrenda general',
  [Treasury.type.WORSHIP_SAN_JOSE]: 'Ofrenda de San José',
  [Treasury.type.TITHE]: 'Diezmo',
  [Treasury.type.DONATION]: 'Donación',
  [Treasury.type.AFP_CONTRIBUTION]: 'AFP',
  [Treasury.type.ISSS_CONTRIBUTION]: 'ISSS',
  [Treasury.type.SALARY_ADVANCE]: 'Adelanto Salarial',
  [Treasury.type.SALARY]: 'Salarios',
  [Treasury.type.PASTORAL_SAVINGS]: 'Ahorro pastoral',
  [Treasury.type.CAMP_MAINTENANCE]: 'Mantenimiento al campamento',
  [Treasury.type.HELP_BIBLICAL_THEOLOGICAL_COMMITTEE]:
    'Ayuda al comite biblico teologico',
  [Treasury.type.OTHER]: 'Otro',
  [Treasury.type.VIATICOS]: 'Viaticos',
  [Treasury.type.VIATICOS_FAMILIA_PASTORAL]: 'Viaticos familia pastoral',
};

export const TREASURY_DEBIT_TYPE_OPTIONS: SelectItemProps[] = [
  {
    key: Treasury.type.WORSHIP,
    value: Treasury.type.WORSHIP,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.WORSHIP],
  },
  {
    key: Treasury.type.WORSHIP_SAN_JOSE,
    value: Treasury.type.WORSHIP_SAN_JOSE,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.WORSHIP_SAN_JOSE],
  },
  {
    key: Treasury.type.TITHE,
    value: Treasury.type.TITHE,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.TITHE],
  },
  {
    key: Treasury.type.DONATION,
    value: Treasury.type.DONATION,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.DONATION],
  },
  {
    key: Treasury.type.OTHER,
    value: Treasury.type.OTHER,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.OTHER],
  },
];

export const TREASURY_CREDIT_TYPE_OPTIONS: SelectItemProps[] = [
  {
    key: Treasury.type.SALARY,
    value: Treasury.type.SALARY,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.SALARY],
  },
  {
    key: Treasury.type.VIATICOS_FAMILIA_PASTORAL,
    value: Treasury.type.VIATICOS_FAMILIA_PASTORAL,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.VIATICOS_FAMILIA_PASTORAL],
  },
  {
    key: Treasury.type.CAMP_MAINTENANCE,
    value: Treasury.type.CAMP_MAINTENANCE,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.CAMP_MAINTENANCE],
  },
  {
    key: Treasury.type.HELP_BIBLICAL_THEOLOGICAL_COMMITTEE,
    value: Treasury.type.HELP_BIBLICAL_THEOLOGICAL_COMMITTEE,
    label:
      TREASURY_TYPE_MAP_LABEL[
        Treasury.type.HELP_BIBLICAL_THEOLOGICAL_COMMITTEE
      ],
  },
  {
    key: Treasury.type.AFP_CONTRIBUTION,
    value: Treasury.type.AFP_CONTRIBUTION,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.AFP_CONTRIBUTION],
  },
  {
    key: Treasury.type.ISSS_CONTRIBUTION,
    value: Treasury.type.ISSS_CONTRIBUTION,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.ISSS_CONTRIBUTION],
  },
  {
    key: Treasury.type.VIATICOS,
    value: Treasury.type.VIATICOS,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.VIATICOS],
  },
  {
    key: Treasury.type.SALARY_ADVANCE,
    value: Treasury.type.SALARY_ADVANCE,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.SALARY_ADVANCE],
  },
  {
    key: Treasury.type.OTHER,
    value: Treasury.type.OTHER,
    label: TREASURY_TYPE_MAP_LABEL[Treasury.type.OTHER],
  },
];
