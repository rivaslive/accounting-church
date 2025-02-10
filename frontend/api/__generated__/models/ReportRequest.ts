/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReportRequest = {
    data: {
        date: string;
        files?: (number | string);
        state?: ReportRequest.state;
        name: string;
        type: ReportRequest.type;
        locale?: string;
        localizations?: Array<(number | string)>;
    };
};
export namespace ReportRequest {
    export enum state {
        PROCESSING = 'processing',
        ACTIVE = 'active',
    }
    export enum type {
        TREASURY = 'treasury',
        SMALL_TREASURY = 'small-treasury',
        COLLABORATOR = 'collaborator',
    }
}

