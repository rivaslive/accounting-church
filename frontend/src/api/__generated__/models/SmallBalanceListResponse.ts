/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmallBalance } from './SmallBalance';
export type SmallBalanceListResponse = {
    data?: Array<SmallBalance>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

