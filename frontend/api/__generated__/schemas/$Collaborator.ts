/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Collaborator = {
    properties: {
        id: {
            type: 'number',
        },
        documentId: {
            type: 'string',
        },
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
                properties: {
                    id: {
                        type: 'number',
                    },
                    documentId: {
                        type: 'string',
                    },
                    date: {
                        type: 'string',
                        format: 'date-time',
                    },
                    amount: {
                        type: 'number',
                        format: 'float',
                    },
                    direction: {
                        type: 'Enum',
                    },
                    note: {
                        type: 'string',
                    },
                    collaborator: {
                        properties: {
                            id: {
                                type: 'number',
                            },
                            documentId: {
                                type: 'string',
                            },
                            firstName: {
                                type: 'string',
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
                                    properties: {
                                        id: {
                                            type: 'number',
                                        },
                                        documentId: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                            dui: {
                                type: 'string',
                            },
                            createdAt: {
                                type: 'string',
                                format: 'date-time',
                            },
                            updatedAt: {
                                type: 'string',
                                format: 'date-time',
                            },
                            publishedAt: {
                                type: 'string',
                                format: 'date-time',
                            },
                            createdBy: {
                                properties: {
                                    id: {
                                        type: 'number',
                                    },
                                    documentId: {
                                        type: 'string',
                                    },
                                    firstname: {
                                        type: 'string',
                                    },
                                    lastname: {
                                        type: 'string',
                                    },
                                    username: {
                                        type: 'string',
                                    },
                                    email: {
                                        type: 'string',
                                        format: 'email',
                                    },
                                    resetPasswordToken: {
                                        type: 'string',
                                    },
                                    registrationToken: {
                                        type: 'string',
                                    },
                                    isActive: {
                                        type: 'boolean',
                                    },
                                    roles: {
                                        type: 'array',
                                        contains: {
                                            properties: {
                                                id: {
                                                    type: 'number',
                                                },
                                                documentId: {
                                                    type: 'string',
                                                },
                                                name: {
                                                    type: 'string',
                                                },
                                                code: {
                                                    type: 'string',
                                                },
                                                description: {
                                                    type: 'string',
                                                },
                                                users: {
                                                    type: 'array',
                                                    contains: {
                                                        properties: {
                                                            id: {
                                                                type: 'number',
                                                            },
                                                            documentId: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                                permissions: {
                                                    type: 'array',
                                                    contains: {
                                                        properties: {
                                                            id: {
                                                                type: 'number',
                                                            },
                                                            documentId: {
                                                                type: 'string',
                                                            },
                                                            action: {
                                                                type: 'string',
                                                            },
                                                            actionParameters: {
                                                                properties: {
                                                                },
                                                            },
                                                            subject: {
                                                                type: 'string',
                                                            },
                                                            properties: {
                                                                properties: {
                                                                },
                                                            },
                                                            conditions: {
                                                                properties: {
                                                                },
                                                            },
                                                            role: {
                                                                properties: {
                                                                    id: {
                                                                        type: 'number',
                                                                    },
                                                                    documentId: {
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                            createdAt: {
                                                                type: 'string',
                                                                format: 'date-time',
                                                            },
                                                            updatedAt: {
                                                                type: 'string',
                                                                format: 'date-time',
                                                            },
                                                            publishedAt: {
                                                                type: 'string',
                                                                format: 'date-time',
                                                            },
                                                            createdBy: {
                                                                properties: {
                                                                    id: {
                                                                        type: 'number',
                                                                    },
                                                                    documentId: {
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                            updatedBy: {
                                                                properties: {
                                                                    id: {
                                                                        type: 'number',
                                                                    },
                                                                    documentId: {
                                                                        type: 'string',
                                                                    },
                                                                },
                                                            },
                                                            locale: {
                                                                type: 'string',
                                                            },
                                                            localizations: {
                                                                type: 'array',
                                                                contains: {
                                                                    properties: {
                                                                        id: {
                                                                            type: 'number',
                                                                        },
                                                                        documentId: {
                                                                            type: 'string',
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                                createdAt: {
                                                    type: 'string',
                                                    format: 'date-time',
                                                },
                                                updatedAt: {
                                                    type: 'string',
                                                    format: 'date-time',
                                                },
                                                publishedAt: {
                                                    type: 'string',
                                                    format: 'date-time',
                                                },
                                                createdBy: {
                                                    properties: {
                                                        id: {
                                                            type: 'number',
                                                        },
                                                        documentId: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                updatedBy: {
                                                    properties: {
                                                        id: {
                                                            type: 'number',
                                                        },
                                                        documentId: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                locale: {
                                                    type: 'string',
                                                },
                                                localizations: {
                                                    type: 'array',
                                                    contains: {
                                                        properties: {
                                                            id: {
                                                                type: 'number',
                                                            },
                                                            documentId: {
                                                                type: 'string',
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                    blocked: {
                                        type: 'boolean',
                                    },
                                    preferedLanguage: {
                                        type: 'string',
                                    },
                                    createdAt: {
                                        type: 'string',
                                        format: 'date-time',
                                    },
                                    updatedAt: {
                                        type: 'string',
                                        format: 'date-time',
                                    },
                                    publishedAt: {
                                        type: 'string',
                                        format: 'date-time',
                                    },
                                    createdBy: {
                                        properties: {
                                            id: {
                                                type: 'number',
                                            },
                                            documentId: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    updatedBy: {
                                        properties: {
                                            id: {
                                                type: 'number',
                                            },
                                            documentId: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    locale: {
                                        type: 'string',
                                    },
                                    localizations: {
                                        type: 'array',
                                        contains: {
                                            properties: {
                                                id: {
                                                    type: 'number',
                                                },
                                                documentId: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            updatedBy: {
                                properties: {
                                    id: {
                                        type: 'number',
                                    },
                                    documentId: {
                                        type: 'string',
                                    },
                                },
                            },
                            locale: {
                                type: 'string',
                            },
                            localizations: {
                                type: 'array',
                                contains: {
                                    properties: {
                                        id: {
                                            type: 'number',
                                        },
                                        documentId: {
                                            type: 'string',
                                        },
                                    },
                                },
                            },
                        },
                    },
                    type: {
                        type: 'Enum',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    publishedAt: {
                        type: 'string',
                        format: 'date-time',
                    },
                    createdBy: {
                        properties: {
                            id: {
                                type: 'number',
                            },
                            documentId: {
                                type: 'string',
                            },
                        },
                    },
                    updatedBy: {
                        properties: {
                            id: {
                                type: 'number',
                            },
                            documentId: {
                                type: 'string',
                            },
                        },
                    },
                    locale: {
                        type: 'string',
                    },
                    localizations: {
                        type: 'array',
                        contains: {
                            properties: {
                                id: {
                                    type: 'number',
                                },
                                documentId: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
        dui: {
            type: 'string',
        },
        createdAt: {
            type: 'string',
            format: 'date-time',
        },
        updatedAt: {
            type: 'string',
            format: 'date-time',
        },
        publishedAt: {
            type: 'string',
            format: 'date-time',
        },
        createdBy: {
            properties: {
                id: {
                    type: 'number',
                },
                documentId: {
                    type: 'string',
                },
            },
        },
        updatedBy: {
            properties: {
                id: {
                    type: 'number',
                },
                documentId: {
                    type: 'string',
                },
            },
        },
        locale: {
            type: 'string',
        },
        localizations: {
            type: 'array',
            contains: {
                properties: {
                    id: {
                        type: 'number',
                    },
                    documentId: {
                        type: 'string',
                    },
                },
            },
        },
    },
} as const;
