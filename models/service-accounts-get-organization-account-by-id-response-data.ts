/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountAttributes } from './service-account-attributes';
import { ServiceAccountsGetOrganizationAccountByIdResponseDataLinks } from './service-accounts-get-organization-account-by-id-response-data-links';

/**
 * 
 * @export
 * @interface ServiceAccountsGetOrganizationAccountByIdResponseData
 */
export interface ServiceAccountsGetOrganizationAccountByIdResponseData {
    /**
     * 
     * @type {ServiceAccountAttributes}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponseData
     */
    'attributes': ServiceAccountAttributes;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponseData
     */
    'id': string;
    /**
     * 
     * @type {ServiceAccountsGetOrganizationAccountByIdResponseDataLinks}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponseData
     */
    'links'?: ServiceAccountsGetOrganizationAccountByIdResponseDataLinks;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountsGetOrganizationAccountByIdResponseData
     */
    'type': string;
}

