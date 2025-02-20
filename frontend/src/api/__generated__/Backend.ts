/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { CollaboratorService } from './services/CollaboratorService';
import { GeneralBalanceService } from './services/GeneralBalanceService';
import { ReportService } from './services/ReportService';
import { SmallBalanceService } from './services/SmallBalanceService';
import { SmallTreasuryService } from './services/SmallTreasuryService';
import { TreasuryService } from './services/TreasuryService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Backend {
    public readonly collaborator: CollaboratorService;
    public readonly generalBalance: GeneralBalanceService;
    public readonly report: ReportService;
    public readonly smallBalance: SmallBalanceService;
    public readonly smallTreasury: SmallTreasuryService;
    public readonly treasury: TreasuryService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'http://localhost:1337/api',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.collaborator = new CollaboratorService(this.request);
        this.generalBalance = new GeneralBalanceService(this.request);
        this.report = new ReportService(this.request);
        this.smallBalance = new SmallBalanceService(this.request);
        this.smallTreasury = new SmallTreasuryService(this.request);
        this.treasury = new TreasuryService(this.request);
    }
}

