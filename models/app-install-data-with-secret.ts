/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppInstallDataRelationships } from './app-install-data-relationships';
import { AppInstallDataWithSecretAttributes } from './app-install-data-with-secret-attributes';
import { Links } from './links';

/**
 * 
 * @export
 * @interface AppInstallDataWithSecret
 */
export interface AppInstallDataWithSecret {
    /**
     * 
     * @type {AppInstallDataWithSecretAttributes}
     * @memberof AppInstallDataWithSecret
     */
    'attributes': AppInstallDataWithSecretAttributes;
    /**
     * 
     * @type {string}
     * @memberof AppInstallDataWithSecret
     */
    'id': string;
    /**
     * 
     * @type {Links}
     * @memberof AppInstallDataWithSecret
     */
    'links'?: Links;
    /**
     * 
     * @type {AppInstallDataRelationships}
     * @memberof AppInstallDataWithSecret
     */
    'relationships'?: AppInstallDataRelationships;
    /**
     * 
     * @type {string}
     * @memberof AppInstallDataWithSecret
     */
    'type': string;
}

