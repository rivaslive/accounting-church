/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ReportRequest = {
    properties: {
        data: {
            properties: {
                date: {
                    type: 'string',
                    isRequired: true,
                    format: 'date-time',
                },
                files: {
                    type: 'one-of',
                    contains: [{
                        type: 'number',
                    }, {
                        type: 'string',
                    }],
                },
                state: {
                    type: 'Enum',
                },
                name: {
                    type: 'string',
                    isRequired: true,
                },
                type: {
                    type: 'Enum',
                    isRequired: true,
                },
                locale: {
                    type: 'string',
                },
                localizations: {
                    type: 'array',
                    contains: {
                        type: 'one-of',
                        contains: [{
                            type: 'number',
                        }, {
                            type: 'string',
                        }],
                    },
                },
            },
            isRequired: true,
        },
    },
} as const;
