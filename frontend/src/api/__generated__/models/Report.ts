/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Report = {
    id?: number;
    documentId?: string;
    date: string;
    files?: {
        id?: number;
        documentId?: string;
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: Array<{
            id?: number;
            documentId?: string;
        }>;
        folder?: {
            id?: number;
            documentId?: string;
            name?: string;
            pathId?: number;
            parent?: {
                id?: number;
                documentId?: string;
            };
            children?: Array<{
                id?: number;
                documentId?: string;
            }>;
            files?: Array<{
                id?: number;
                documentId?: string;
                name?: string;
                alternativeText?: string;
                caption?: string;
                width?: number;
                height?: number;
                formats?: any;
                hash?: string;
                ext?: string;
                mime?: string;
                size?: number;
                url?: string;
                previewUrl?: string;
                provider?: string;
                provider_metadata?: any;
                related?: Array<{
                    id?: number;
                    documentId?: string;
                }>;
                folder?: {
                    id?: number;
                    documentId?: string;
                };
                folderPath?: string;
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: {
                    id?: number;
                    documentId?: string;
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: Array<{
                        id?: number;
                        documentId?: string;
                        name?: string;
                        code?: string;
                        description?: string;
                        users?: Array<{
                            id?: number;
                            documentId?: string;
                        }>;
                        permissions?: Array<{
                            id?: number;
                            documentId?: string;
                            action?: string;
                            actionParameters?: any;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: {
                                id?: number;
                                documentId?: string;
                            };
                            createdAt?: string;
                            updatedAt?: string;
                            publishedAt?: string;
                            createdBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            updatedBy?: {
                                id?: number;
                                documentId?: string;
                            };
                            locale?: string;
                            localizations?: Array<{
                                id?: number;
                                documentId?: string;
                            }>;
                        }>;
                        createdAt?: string;
                        updatedAt?: string;
                        publishedAt?: string;
                        createdBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        updatedBy?: {
                            id?: number;
                            documentId?: string;
                        };
                        locale?: string;
                        localizations?: Array<{
                            id?: number;
                            documentId?: string;
                        }>;
                    }>;
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    updatedBy?: {
                        id?: number;
                        documentId?: string;
                    };
                    locale?: string;
                    localizations?: Array<{
                        id?: number;
                        documentId?: string;
                    }>;
                };
                updatedBy?: {
                    id?: number;
                    documentId?: string;
                };
                locale?: string;
                localizations?: Array<{
                    id?: number;
                    documentId?: string;
                }>;
            }>;
            path?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: Array<{
                id?: number;
                documentId?: string;
            }>;
        };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: {
            id?: number;
            documentId?: string;
        };
        updatedBy?: {
            id?: number;
            documentId?: string;
        };
        locale?: string;
        localizations?: Array<{
            id?: number;
            documentId?: string;
        }>;
    };
    state?: Report.state;
    name: string;
    type: Report.type;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    createdBy?: {
        id?: number;
        documentId?: string;
    };
    updatedBy?: {
        id?: number;
        documentId?: string;
    };
    locale?: string;
    localizations?: Array<{
        id?: number;
        documentId?: string;
        date?: string;
        files?: {
            id?: number;
            documentId?: string;
            name?: string;
            alternativeText?: string;
            caption?: string;
            width?: number;
            height?: number;
            formats?: any;
            hash?: string;
            ext?: string;
            mime?: string;
            size?: number;
            url?: string;
            previewUrl?: string;
            provider?: string;
            provider_metadata?: any;
            related?: Array<{
                id?: number;
                documentId?: string;
            }>;
            folder?: {
                id?: number;
                documentId?: string;
            };
            folderPath?: string;
            createdAt?: string;
            updatedAt?: string;
            publishedAt?: string;
            createdBy?: {
                id?: number;
                documentId?: string;
            };
            updatedBy?: {
                id?: number;
                documentId?: string;
            };
            locale?: string;
            localizations?: Array<{
                id?: number;
                documentId?: string;
            }>;
        };
        state?: 'processing' | 'active';
        name?: string;
        type?: 'treasury' | 'small-treasury' | 'collaborator';
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: {
            id?: number;
            documentId?: string;
        };
        updatedBy?: {
            id?: number;
            documentId?: string;
        };
        locale?: string;
        localizations?: Array<{
            id?: number;
            documentId?: string;
        }>;
    }>;
};
export namespace Report {
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

