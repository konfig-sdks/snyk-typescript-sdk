/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JsonApi } from './json-api';
import { Links } from './links';
import { ServiceAccountsCreateGroupResponseData } from './service-accounts-create-group-response-data';

/**
 * 
 * @export
 * @interface ServiceAccountsCreateGroupResponse
 */
export interface ServiceAccountsCreateGroupResponse {
    /**
     * 
     * @type {ServiceAccountsCreateGroupResponseData}
     * @memberof ServiceAccountsCreateGroupResponse
     */
    'data': ServiceAccountsCreateGroupResponseData;
    /**
     * 
     * @type {JsonApi}
     * @memberof ServiceAccountsCreateGroupResponse
     */
    'jsonapi': JsonApi;
    /**
     * 
     * @type {Links}
     * @memberof ServiceAccountsCreateGroupResponse
     */
    'links'?: Links;
}

