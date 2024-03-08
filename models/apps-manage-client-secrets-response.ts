/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppDataWithSecret } from './app-data-with-secret';
import { JsonApi } from './json-api';
import { SelfLink } from './self-link';

/**
 * 
 * @export
 * @interface AppsManageClientSecretsResponse
 */
export interface AppsManageClientSecretsResponse {
    /**
     * 
     * @type {AppDataWithSecret}
     * @memberof AppsManageClientSecretsResponse
     */
    'data'?: AppDataWithSecret;
    /**
     * 
     * @type {JsonApi}
     * @memberof AppsManageClientSecretsResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof AppsManageClientSecretsResponse
     */
    'links'?: SelfLink;
}
