/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Report = {
    properties: {
        id: {
            type: 'number',
        },
        documentId: {
            type: 'string',
        },
        date: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        files: {
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
                alternativeText: {
                    type: 'string',
                },
                caption: {
                    type: 'string',
                },
                width: {
                    type: 'number',
                },
                height: {
                    type: 'number',
                },
                formats: {
                    properties: {
                    },
                },
                hash: {
                    type: 'string',
                },
                ext: {
                    type: 'string',
                },
                mime: {
                    type: 'string',
                },
                size: {
                    type: 'number',
                    format: 'float',
                },
                url: {
                    type: 'string',
                },
                previewUrl: {
                    type: 'string',
                },
                provider: {
                    type: 'string',
                },
                provider_metadata: {
                    properties: {
                    },
                },
                related: {
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
                folder: {
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
                        pathId: {
                            type: 'number',
                        },
                        parent: {
                            properties: {
                                id: {
                                    type: 'number',
                                },
                                documentId: {
                                    type: 'string',
                                },
                            },
                        },
                        children: {
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
                        files: {
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
                                    alternativeText: {
                                        type: 'string',
                                    },
                                    caption: {
                                        type: 'string',
                                    },
                                    width: {
                                        type: 'number',
                                    },
                                    height: {
                                        type: 'number',
                                    },
                                    formats: {
                                        properties: {
                                        },
                                    },
                                    hash: {
                                        type: 'string',
                                    },
                                    ext: {
                                        type: 'string',
                                    },
                                    mime: {
                                        type: 'string',
                                    },
                                    size: {
                                        type: 'number',
                                        format: 'float',
                                    },
                                    url: {
                                        type: 'string',
                                    },
                                    previewUrl: {
                                        type: 'string',
                                    },
                                    provider: {
                                        type: 'string',
                                    },
                                    provider_metadata: {
                                        properties: {
                                        },
                                    },
                                    related: {
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
                                    folder: {
                                        properties: {
                                            id: {
                                                type: 'number',
                                            },
                                            documentId: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    folderPath: {
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
                        },
                        path: {
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
                folderPath: {
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
                    date: {
                        type: 'string',
                        format: 'date-time',
                    },
                    files: {
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
                            alternativeText: {
                                type: 'string',
                            },
                            caption: {
                                type: 'string',
                            },
                            width: {
                                type: 'number',
                            },
                            height: {
                                type: 'number',
                            },
                            formats: {
                                properties: {
                                },
                            },
                            hash: {
                                type: 'string',
                            },
                            ext: {
                                type: 'string',
                            },
                            mime: {
                                type: 'string',
                            },
                            size: {
                                type: 'number',
                                format: 'float',
                            },
                            url: {
                                type: 'string',
                            },
                            previewUrl: {
                                type: 'string',
                            },
                            provider: {
                                type: 'string',
                            },
                            provider_metadata: {
                                properties: {
                                },
                            },
                            related: {
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
                            folder: {
                                properties: {
                                    id: {
                                        type: 'number',
                                    },
                                    documentId: {
                                        type: 'string',
                                    },
                                },
                            },
                            folderPath: {
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
                    state: {
                        type: 'Enum',
                    },
                    name: {
                        type: 'string',
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
    },
} as const;
