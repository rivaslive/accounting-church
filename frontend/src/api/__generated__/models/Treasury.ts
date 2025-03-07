/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Treasury = {
    id?: number;
    documentId?: string;
    date: string;
    amount: number;
    direction: Treasury.direction;
    note?: string;
    collaborator?: {
        id?: number;
        documentId?: string;
        firstName?: string;
        email?: string;
        phone?: string;
        lastName?: string;
        treasuries?: Array<{
            id?: number;
            documentId?: string;
            date?: string;
            amount?: number;
            direction?: 'debit' | 'credit';
            note?: string;
            collaborator?: {
                id?: number;
                documentId?: string;
            };
            type?: 'worship' | 'worship san jose' | 'tithe' | 'donation' | 'AFP contribution' | 'ISSS contribution' | 'help biblical theological committee' | 'camp maintenance' | 'pastoral savings' | 'salary advance' | 'salary' | 'viaticos familia pastoral' | 'viaticos' | 'other';
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
        dui?: string;
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
    type?: Treasury.type;
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
export namespace Treasury {
    export enum direction {
        DEBIT = 'debit',
        CREDIT = 'credit',
    }
    export enum type {
        WORSHIP = 'worship',
        WORSHIP_SAN_JOSE = 'worship san jose',
        TITHE = 'tithe',
        DONATION = 'donation',
        AFP_CONTRIBUTION = 'AFP contribution',
        ISSS_CONTRIBUTION = 'ISSS contribution',
        HELP_BIBLICAL_THEOLOGICAL_COMMITTEE = 'help biblical theological committee',
        CAMP_MAINTENANCE = 'camp maintenance',
        PASTORAL_SAVINGS = 'pastoral savings',
        SALARY_ADVANCE = 'salary advance',
        SALARY = 'salary',
        VIATICOS_FAMILIA_PASTORAL = 'viaticos familia pastoral',
        VIATICOS = 'viaticos',
        OTHER = 'other',
    }
}

