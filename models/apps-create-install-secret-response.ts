/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppInstallDataWithSecret } from './app-install-data-with-secret';
import { JsonApi } from './json-api';
import { SelfLink } from './self-link';

/**
 * 
 * @export
 * @interface AppsCreateInstallSecretResponse
 */
export interface AppsCreateInstallSecretResponse {
    /**
     * 
     * @type {AppInstallDataWithSecret}
     * @memberof AppsCreateInstallSecretResponse
     */
    'data'?: AppInstallDataWithSecret;
    /**
     * 
     * @type {JsonApi}
     * @memberof AppsCreateInstallSecretResponse
     */
    'jsonapi'?: JsonApi;
    /**
     * 
     * @type {SelfLink}
     * @memberof AppsCreateInstallSecretResponse
     */
    'links'?: SelfLink;
}
