/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountAttributes } from './service-account-attributes';
import { ServiceAccountsCreateForOrganizationResponseDataLinks } from './service-accounts-create-for-organization-response-data-links';

/**
 * 
 * @export
 * @interface ServiceAccountsCreateForOrganizationResponseData
 */
export interface ServiceAccountsCreateForOrganizationResponseData {
    /**
     * 
     * @type {ServiceAccountAttributes}
     * @memberof ServiceAccountsCreateForOrganizationResponseData
     */
    'attributes': ServiceAccountAttributes;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountsCreateForOrganizationResponseData
     */
    'id': string;
    /**
     * 
     * @type {ServiceAccountsCreateForOrganizationResponseDataLinks}
     * @memberof ServiceAccountsCreateForOrganizationResponseData
     */
    'links'?: ServiceAccountsCreateForOrganizationResponseDataLinks;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountsCreateForOrganizationResponseData
     */
    'type': string;
}

