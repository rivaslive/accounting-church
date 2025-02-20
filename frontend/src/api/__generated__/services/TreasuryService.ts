/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TreasuryListResponse } from '../models/TreasuryListResponse';
import type { TreasuryRequest } from '../models/TreasuryRequest';
import type { TreasuryResponse } from '../models/TreasuryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TreasuryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TreasuryListResponse OK
     * @throws ApiError
     */
    public getTreasuries({
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
    }): CancelablePromise<TreasuryListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/treasuries',
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
     * @returns TreasuryResponse OK
     * @throws ApiError
     */
    public postTreasuries({
        requestBody,
    }: {
        requestBody: TreasuryRequest,
    }): CancelablePromise<TreasuryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/treasuries',
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
     * @returns TreasuryResponse OK
     * @throws ApiError
     */
    public getTreasuriesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<TreasuryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/treasuries/{id}',
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
     * @returns TreasuryResponse OK
     * @throws ApiError
     */
    public putTreasuriesId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: TreasuryRequest,
    }): CancelablePromise<TreasuryResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/treasuries/{id}',
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
    public deleteTreasuriesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/treasuries/{id}',
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
