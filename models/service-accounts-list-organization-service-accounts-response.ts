/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { ServiceAccountsListOrganizationServiceAccountsResponseDataInner } from './service-accounts-list-organization-service-accounts-response-data-inner';

/**
 * 
 * @export
 * @interface ServiceAccountsListOrganizationServiceAccountsResponse
 */
export interface ServiceAccountsListOrganizationServiceAccountsResponse {
    /**
     * 
     * @type {Array<ServiceAccountsListOrganizationServiceAccountsResponseDataInner>}
     * @memberof ServiceAccountsListOrganizationServiceAccountsResponse
     */
    'data': Array<ServiceAccountsListOrganizationServiceAccountsResponseDataInner>;
    /**
     * 
     * @type {JsonApi}
     * @memberof ServiceAccountsListOrganizationServiceAccountsResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof ServiceAccountsListOrganizationServiceAccountsResponse
     */
    'links': Links;
}

