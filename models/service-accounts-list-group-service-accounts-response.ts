/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { ServiceAccountsListGroupServiceAccountsResponseDataInner } from './service-accounts-list-group-service-accounts-response-data-inner';

/**
 * 
 * @export
 * @interface ServiceAccountsListGroupServiceAccountsResponse
 */
export interface ServiceAccountsListGroupServiceAccountsResponse {
    /**
     * 
     * @type {Array<ServiceAccountsListGroupServiceAccountsResponseDataInner>}
     * @memberof ServiceAccountsListGroupServiceAccountsResponse
     */
    'data': Array<ServiceAccountsListGroupServiceAccountsResponseDataInner>;
    /**
     * 
     * @type {JsonApi}
     * @memberof ServiceAccountsListGroupServiceAccountsResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof ServiceAccountsListGroupServiceAccountsResponse
     */
    'links': Links;
}

