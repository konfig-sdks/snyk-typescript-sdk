/*
Snyk API

Snyk helps software-driven businesses develop fast and stay secure. Continuously find and fix vulnerabilities for npm, Maven, NuGet, RubyGems, PyPI and more.

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountsUpdateOrganizationServiceAccountNameRequestDataAttributes } from './service-accounts-update-organization-service-account-name-request-data-attributes';

/**
 * 
 * @export
 * @interface ServiceAccountsUpdateOrganizationServiceAccountNameRequestData
 */
export interface ServiceAccountsUpdateOrganizationServiceAccountNameRequestData {
    /**
     * 
     * @type {ServiceAccountsUpdateOrganizationServiceAccountNameRequestDataAttributes}
     * @memberof ServiceAccountsUpdateOrganizationServiceAccountNameRequestData
     */
    'attributes': ServiceAccountsUpdateOrganizationServiceAccountNameRequestDataAttributes;
    /**
     * The ID of the service account. Must match the id in the url path.
     * @type {string}
     * @memberof ServiceAccountsUpdateOrganizationServiceAccountNameRequestData
     */
    'id': string;
    /**
     * The Resource type.
     * @type {string}
     * @memberof ServiceAccountsUpdateOrganizationServiceAccountNameRequestData
     */
    'type': ServiceAccountsUpdateOrganizationServiceAccountNameRequestDataTypeEnum;
}

type ServiceAccountsUpdateOrganizationServiceAccountNameRequestDataTypeEnum = 'service_account'


