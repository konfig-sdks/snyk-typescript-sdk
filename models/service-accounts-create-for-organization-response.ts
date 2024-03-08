/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { ServiceAccountsCreateForOrganizationResponseData } from './service-accounts-create-for-organization-response-data';

/**
 * 
 * @export
 * @interface ServiceAccountsCreateForOrganizationResponse
 */
export interface ServiceAccountsCreateForOrganizationResponse {
    /**
     * 
     * @type {ServiceAccountsCreateForOrganizationResponseData}
     * @memberof ServiceAccountsCreateForOrganizationResponse
     */
    'data': ServiceAccountsCreateForOrganizationResponseData;
    /**
     * 
     * @type {JsonApi}
     * @memberof ServiceAccountsCreateForOrganizationResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof ServiceAccountsCreateForOrganizationResponse
     */
    'links': Links;
}
