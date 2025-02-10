/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SmallTreasuryListResponse } from '../models/SmallTreasuryListResponse';
import type { SmallTreasuryRequest } from '../models/SmallTreasuryRequest';
import type { SmallTreasuryResponse } from '../models/SmallTreasuryResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SmallTreasuryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns SmallTreasuryListResponse OK
     * @throws ApiError
     */
    public getSmallTreasuries({
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
    }): CancelablePromise<SmallTreasuryListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/small-treasuries',
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
     * @returns SmallTreasuryResponse OK
     * @throws ApiError
     */
    public postSmallTreasuries({
        requestBody,
    }: {
        requestBody: SmallTreasuryRequest,
    }): CancelablePromise<SmallTreasuryResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/small-treasuries',
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
     * @returns SmallTreasuryResponse OK
     * @throws ApiError
     */
    public getSmallTreasuriesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<SmallTreasuryResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/small-treasuries/{id}',
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
     * @returns SmallTreasuryResponse OK
     * @throws ApiError
     */
    public putSmallTreasuriesId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: SmallTreasuryRequest,
    }): CancelablePromise<SmallTreasuryResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/small-treasuries/{id}',
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
    public deleteSmallTreasuriesId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/small-treasuries/{id}',
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
