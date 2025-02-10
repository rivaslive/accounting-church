/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeneralBalanceListResponse } from '../models/GeneralBalanceListResponse';
import type { GeneralBalanceRequest } from '../models/GeneralBalanceRequest';
import type { GeneralBalanceResponse } from '../models/GeneralBalanceResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GeneralBalanceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GeneralBalanceListResponse OK
     * @throws ApiError
     */
    public getGeneralBalances({
        sort,
        paginationWithCount,
        paginationPage,
        paginationPageSize,
        paginationStart,
        paginationLimit,
        fields,
        populate,
        filters,
        locale,
    }: {
        /**
         * Sort by attributes ascending (asc) or descending (desc)
         */
        sort?: string,
        /**
         * Return page/pageSize (default: true)
         */
        paginationWithCount?: boolean,
        /**
         * Page number (default: 0)
         */
        paginationPage?: number,
        /**
         * Page size (default: 25)
         */
        paginationPageSize?: number,
        /**
         * Offset value (default: 0)
         */
        paginationStart?: number,
        /**
         * Number of entities to return (default: 25)
         */
        paginationLimit?: number,
        /**
         * Fields to return (ex: title,author)
         */
        fields?: string,
        /**
         * Relations to return
         */
        populate?: string,
        /**
         * Filters to apply
         */
        filters?: Record<string, any>,
        /**
         * Locale to apply
         */
        locale?: string,
    }): CancelablePromise<GeneralBalanceListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/general-balances',
            query: {
                'sort': sort,
                'pagination[withCount]': paginationWithCount,
                'pagination[page]': paginationPage,
                'pagination[pageSize]': paginationPageSize,
                'pagination[start]': paginationStart,
                'pagination[limit]': paginationLimit,
                'fields': fields,
                'populate': populate,
                'filters': filters,
                'locale': locale,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns GeneralBalanceResponse OK
     * @throws ApiError
     */
    public postGeneralBalances({
        requestBody,
    }: {
        requestBody: GeneralBalanceRequest,
    }): CancelablePromise<GeneralBalanceResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/general-balances',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns GeneralBalanceResponse OK
     * @throws ApiError
     */
    public getGeneralBalancesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<GeneralBalanceResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/general-balances/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns GeneralBalanceResponse OK
     * @throws ApiError
     */
    public putGeneralBalancesId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: GeneralBalanceRequest,
    }): CancelablePromise<GeneralBalanceResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/general-balances/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
    /**
     * @returns number OK
     * @throws ApiError
     */
    public deleteGeneralBalancesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/general-balances/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Internal Server Error`,
            },
        });
    }
}
