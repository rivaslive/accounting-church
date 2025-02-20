/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CollaboratorRequest = {
    properties: {
        data: {
            properties: {
                firstName: {
                    type: 'string',
                    isRequired: true,
                },
                email: {
                    type: 'string',
                    format: 'email',
                },
                phone: {
                    type: 'string',
                },
                lastName: {
                    type: 'string',
                },
                treasuries: {
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
                dui: {
                    type: 'string',
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
