/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collaborator } from './Collaborator';
export type CollaboratorListResponse = {
    data?: Array<Collaborator>;
    meta?: {
        pagination?: {
            page?: number;
            pageSize?: number;
            pageCount?: number;
            total?: number;
        };
    };
};

