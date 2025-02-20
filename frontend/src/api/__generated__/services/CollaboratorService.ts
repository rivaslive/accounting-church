/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollaboratorListResponse } from '../models/CollaboratorListResponse';
import type { CollaboratorRequest } from '../models/CollaboratorRequest';
import type { CollaboratorResponse } from '../models/CollaboratorResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CollaboratorService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns CollaboratorListResponse OK
     * @throws ApiError
     */
    public getCollaborators({
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
    }): CancelablePromise<CollaboratorListResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/collaborators',
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
     * @returns CollaboratorResponse OK
     * @throws ApiError
     */
    public postCollaborators({
        requestBody,
    }: {
        requestBody: CollaboratorRequest,
    }): CancelablePromise<CollaboratorResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/collaborators',
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
     * @returns CollaboratorResponse OK
     * @throws ApiError
     */
    public getCollaboratorsId({
        id,
    }: {
        id: number,
    }): CancelablePromise<CollaboratorResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/collaborators/{id}',
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
     * @returns CollaboratorResponse OK
     * @throws ApiError
     */
    public putCollaboratorsId({
        id,
        requestBody,
    }: {
        id: number,
        requestBody: CollaboratorRequest,
    }): CancelablePromise<CollaboratorResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/collaborators/{id}',
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
    public deleteCollaboratorsId({
        id,
    }: {
        id: number,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/collaborators/{id}',
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
