/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { ServiceAccountsGetOrganizationAccountByIdResponseData } from './service-accounts-get-organization-account-by-id-response-data';

/**
 * 
 * @export
 * @interface ServiceAccountsGetOrganizationAccountByIdResponse
 */
export interface ServiceAccountsGetOrganizationAccountByIdResponse {
    /**
     * 
     * @type {ServiceAccountsGetOrganizationAccountByIdResponseData}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponse
     */
    'data': ServiceAccountsGetOrganizationAccountByIdResponseData;
    /**
     * 
     * @type {JsonApi}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponse
     */
    'links': Links;
}
