/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportListResponse } from '../models/ReportListResponse';
import type { ReportRequest } from '../models/ReportRequest';
import type { ReportResponse } from '../models/ReportResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ReportListResponse OK
     * @throws ApiError
     */
    public getReports({
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
    }): CancelablePromise<ReportListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports',
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
     * @returns ReportResponse OK
     * @throws ApiError
     */
    public postReports({
        requestBody,
    }: {
        requestBody: ReportRequest,
    }): CancelablePromise<ReportResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/reports',
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
     * @returns ReportResponse OK
     * @throws ApiError
     */
    public getReportsId({
        id,
    }: {
        id: number,
    }): CancelablePromise<ReportResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reports/{id}',
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
     * @returns ReportResponse OK
     * @throws ApiError
     */
    public putReportsId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: ReportRequest,
    }): CancelablePromise<ReportResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/reports/{id}',
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
    public deleteReportsId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/reports/{id}',
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
