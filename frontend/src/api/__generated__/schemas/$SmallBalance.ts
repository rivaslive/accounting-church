/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SmallBalance = {
    properties: {
        id: {
            type: 'number',
        },
        documentId: {
            type: 'string',
        },
        total: {
            type: 'number',
            format: 'float',
        },
        month: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
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
                    total: {
                        type: 'number',
                        format: 'float',
                    },
                    month: {
                        type: 'string',
                        format: 'date-time',
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
    },
} as const;
