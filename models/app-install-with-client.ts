/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AppInstallWithClientAttributes } from './app-install-with-client-attributes';
import { AppInstallWithClientRelationships } from './app-install-with-client-relationships';
import { Links } from './links';

/**
 * 
 * @export
 * @interface AppInstallWithClient
 */
export interface AppInstallWithClient {
    /**
     * 
     * @type {AppInstallWithClientAttributes}
     * @memberof AppInstallWithClient
     */
    'attributes': AppInstallWithClientAttributes;
    /**
     * 
     * @type {string}
     * @memberof AppInstallWithClient
     */
    'id': string;
    /**
     * 
     * @type {Links}
     * @memberof AppInstallWithClient
     */
    'links'?: Links;
    /**
     * 
     * @type {AppInstallWithClientRelationships}
     * @memberof AppInstallWithClient
     */
    'relationships': AppInstallWithClientRelationships;
    /**
     * 
     * @type {string}
     * @memberof AppInstallWithClient
     */
    'type': string;
}
