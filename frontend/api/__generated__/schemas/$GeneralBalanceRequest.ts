/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $GeneralBalanceRequest = {
    properties: {
        data: {
            properties: {
                total: {
                    type: 'number',
                    format: 'float',
                },
                month: {
                    type: 'string',
                    isRequired: true,
                    format: 'date-time',
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
