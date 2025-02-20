/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmallBalanceListResponse } from '../models/SmallBalanceListResponse';
import type { SmallBalanceRequest } from '../models/SmallBalanceRequest';
import type { SmallBalanceResponse } from '../models/SmallBalanceResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SmallBalanceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns SmallBalanceListResponse OK
     * @throws ApiError
     */
    public getSmallBalances({
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
    }): CancelablePromise<SmallBalanceListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/small-balances',
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
     * @returns SmallBalanceResponse OK
     * @throws ApiError
     */
    public postSmallBalances({
        requestBody,
    }: {
        requestBody: SmallBalanceRequest,
    }): CancelablePromise<SmallBalanceResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/small-balances',
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
     * @returns SmallBalanceResponse OK
     * @throws ApiError
     */
    public getSmallBalancesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<SmallBalanceResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/small-balances/{id}',
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
     * @returns SmallBalanceResponse OK
     * @throws ApiError
     */
    public putSmallBalancesId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: SmallBalanceRequest,
    }): CancelablePromise<SmallBalanceResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/small-balances/{id}',
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
    public deleteSmallBalancesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/small-balances/{id}',
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
