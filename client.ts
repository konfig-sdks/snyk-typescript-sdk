/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  AppsApi,
  AuditLogsApi,
  CollectionApi,
  ContainerImageApi,
  CustomBaseImagesApi,
  IacSettingsApi,
  InvitesApi,
  IssuesApi,
  OpenAPIApi,
  OrgsApi,
  ProjectsApi,
  SBOMApi,
  SastSettingsApi,
  ServiceAccountsApi,
  SlackApi,
  SlackSettingsApi,
  TargetsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { SnykCustom } from "./client-custom";

export class Snyk extends SnykCustom {
  readonly apps: AppsApi;
  readonly auditLogs: AuditLogsApi;
  readonly collection: CollectionApi;
  readonly containerImage: ContainerImageApi;
  readonly customBaseImages: CustomBaseImagesApi;
  readonly iacSettings: IacSettingsApi;
  readonly invites: InvitesApi;
  readonly issues: IssuesApi;
  readonly openAPI: OpenAPIApi;
  readonly orgs: OrgsApi;
  readonly projects: ProjectsApi;
  readonly sBOM: SBOMApi;
  readonly sastSettings: SastSettingsApi;
  readonly serviceAccounts: ServiceAccountsApi;
  readonly slack: SlackApi;
  readonly slackSettings: SlackSettingsApi;
  readonly targets: TargetsApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.apps = new AppsApi(configuration);
    this.auditLogs = new AuditLogsApi(configuration);
    this.collection = new CollectionApi(configuration);
    this.containerImage = new ContainerImageApi(configuration);
    this.customBaseImages = new CustomBaseImagesApi(configuration);
    this.iacSettings = new IacSettingsApi(configuration);
    this.invites = new InvitesApi(configuration);
    this.issues = new IssuesApi(configuration);
    this.openAPI = new OpenAPIApi(configuration);
    this.orgs = new OrgsApi(configuration);
    this.projects = new ProjectsApi(configuration);
    this.sBOM = new SBOMApi(configuration);
    this.sastSettings = new SastSettingsApi(configuration);
    this.serviceAccounts = new ServiceAccountsApi(configuration);
    this.slack = new SlackApi(configuration);
    this.slackSettings = new SlackSettingsApi(configuration);
    this.targets = new TargetsApi(configuration);
  }

}