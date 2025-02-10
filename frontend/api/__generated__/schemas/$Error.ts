/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Error = {
    properties: {
        data: {
            type: 'one-of',
            contains: [{
                type: 'dictionary',
                contains: {
                    properties: {
                    },
                },
            }],
            isNullable: true,
        },
        error: {
            properties: {
                status: {
                    type: 'number',
                },
                name: {
                    type: 'string',
                },
                message: {
                    type: 'string',
                },
                details: {
                    type: 'dictionary',
                    contains: {
                        properties: {
                        },
                    },
                },
            },
            isRequired: true,
        },
    },
} as const;
