/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SmallTreasuryRequest = {
    data: {
        date: string;
        amount: number;
        direction: SmallTreasuryRequest.direction;
        note?: string;
        locale?: string;
        localizations?: Array<(number | string)>;
    };
};
export namespace SmallTreasuryRequest {
    export enum direction {
        DEBIT = 'debit',
        CREDIT = 'credit',
    }
}

