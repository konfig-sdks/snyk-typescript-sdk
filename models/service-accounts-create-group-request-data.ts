/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ServiceAccountsCreateGroupRequestDataAttributes } from './service-accounts-create-group-request-data-attributes';

/**
 * 
 * @export
 * @interface ServiceAccountsCreateGroupRequestData
 */
export interface ServiceAccountsCreateGroupRequestData {
    /**
     * 
     * @type {ServiceAccountsCreateGroupRequestDataAttributes}
     * @memberof ServiceAccountsCreateGroupRequestData
     */
    'attributes': ServiceAccountsCreateGroupRequestDataAttributes;
    /**
     * The Resource type.
     * @type {string}
     * @memberof ServiceAccountsCreateGroupRequestData
     */
    'type': ServiceAccountsCreateGroupRequestDataTypeEnum;
}

type ServiceAccountsCreateGroupRequestDataTypeEnum = 'service_account'

