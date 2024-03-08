/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountAttributes } from './service-account-attributes';
import { ServiceAccountsListGroupServiceAccountsResponseDataInnerLinks } from './service-accounts-list-group-service-accounts-response-data-inner-links';

/**
 * 
 * @export
 * @interface ServiceAccountsListGroupServiceAccountsResponseDataInner
 */
export interface ServiceAccountsListGroupServiceAccountsResponseDataInner {
    /**
     * 
     * @type {ServiceAccountAttributes}
     * @memberof ServiceAccountsListGroupServiceAccountsResponseDataInner
     */
    'attributes': ServiceAccountAttributes;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountsListGroupServiceAccountsResponseDataInner
     */
    'id': string;
    /**
     * 
     * @type {ServiceAccountsListGroupServiceAccountsResponseDataInnerLinks}
     * @memberof ServiceAccountsListGroupServiceAccountsResponseDataInner
     */
    'links'?: ServiceAccountsListGroupServiceAccountsResponseDataInnerLinks;
    /**
     * 
     * @type {string}
     * @memberof ServiceAccountsListGroupServiceAccountsResponseDataInner
     */
    'type': string;
}

