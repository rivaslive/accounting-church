export namespace Treasury {
  export enum direction {
    DEBIT = 'debit',
    CREDIT = 'credit',
  }

  export enum type {
    WORSHIP = 'worship',
    WORSHIP_SAN_JOSE = 'worship san jose',
    TITHE = 'tithe',
    DONATION = 'donation',
    AFP_CONTRIBUTION = 'AFP contribution',
    ISSS_CONTRIBUTION = 'ISSS contribution',
    HELP_BIBLICAL_THEOLOGICAL_COMMITTEE = 'help biblical theological committee',
    CAMP_MAINTENANCE = 'camp maintenance',
    PASTORAL_SAVINGS = 'pastoral savings',
    SALARY_ADVANCE = 'salary advance',
    SALARY = 'salary',
    OTHER = 'other',
  }
}

export const TREASURY_TYPE_MAP_LABEL = {
  [Treasury.type.WORSHIP]: 'Ofrenda General',
  [Treasury.type.WORSHIP_SAN_JOSE]: 'Ofrenda San José',
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
};
