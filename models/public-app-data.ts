/*
Snyk API

Missing description placeholder

The version of the OpenAPI document: REST


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Links } from './links';
import { PublicAppDataAttributes } from './public-app-data-attributes';

/**
 * 
 * @export
 * @interface PublicAppData
 */
export interface PublicAppData {
    /**
     * 
     * @type {PublicAppDataAttributes}
     * @memberof PublicAppData
     */
    'attributes'?: PublicAppDataAttributes;
    /**
     * 
     * @type {string}
     * @memberof PublicAppData
     */
    'id': string;
    /**
     * 
     * @type {Links}
     * @memberof PublicAppData
     */
    'links'?: Links;
    /**
     * 
     * @type {string}
     * @memberof PublicAppData
     */
    'type': string;
}

