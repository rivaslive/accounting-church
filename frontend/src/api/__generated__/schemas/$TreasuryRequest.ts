/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TreasuryRequest = {
    properties: {
        data: {
            properties: {
                date: {
                    type: 'string',
                    isRequired: true,
                    format: 'date-time',
                },
                amount: {
                    type: 'number',
                    isRequired: true,
                    format: 'float',
                },
                direction: {
                    type: 'Enum',
                    isRequired: true,
                },
                note: {
                    type: 'string',
                },
                collaborator: {
                    type: 'one-of',
                    contains: [{
                        type: 'number',
                    }, {
                        type: 'string',
                    }],
                },
                type: {
                    type: 'Enum',
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
