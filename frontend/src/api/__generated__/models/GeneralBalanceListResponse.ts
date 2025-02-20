/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralBalance } from './GeneralBalance';
export type GeneralBalanceListResponse = {
    data?: Array<GeneralBalance>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

