/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TreasuryRequest = {
    data: {
        date: string;
        amount: number;
        direction: TreasuryRequest.direction;
        note?: string;
        collaborator?: (number | string);
        type?: TreasuryRequest.type;
        locale?: string;
        localizations?: Array<(number | string)>;
    };
};
export namespace TreasuryRequest {
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

